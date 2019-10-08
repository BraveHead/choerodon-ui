import React, { ReactNode } from 'react';
import { action, computed, isArrayLike, observable, runInAction } from 'mobx';
import isString from 'lodash/isString';
import Validity from './Validity';
import ValidationResult from './ValidationResult';
import Record from '../data-set/Record';
import Form from '../form/Form';
import validationRules, { methodReturn, validationRule, ValidatorProps } from './rules';
import valueMissing from './rules/valueMissing';
import getReactNodeText from '../_util/getReactNodeText';

export type CustomValidator = (
  value: any,
  name: string,
  record: Record | Form,
) => Promise<boolean | string | undefined>;

export interface ValidationMessages {
  badInput?: string;
  patternMismatch?: string;
  rangeOverflow?: ReactNode;
  rangeUnderflow?: ReactNode;
  stepMismatch?: string;
  tooLong?: string;
  tooShort?: string;
  typeMismatch?: string;
  valueMissing?: ReactNode;
  uniqueError?: string;
  unknown?: string;
}

export default class Validator {
  @observable fieldProps: ValidatorProps;

  @observable controlProps: ValidatorProps;

  validity: Validity = new Validity();

  validedValue: any;

  injectionOptions: object = {};

  @observable validationMessage: ReactNode;

  @observable validationErrorValues: ValidationResult[];

  @computed
  get props(): ValidatorProps {
    return {
      ...this.fieldProps,
      ...this.controlProps,
    };
  }

  constructor() {
    runInAction(() => {
      this.validationMessage = '';
      this.validationErrorValues = [];
    });
  }

  @action
  setProps(props) {
    this.fieldProps = props;
  }

  @action
  setControlProps(props) {
    this.controlProps = props;
  }

  @action
  reset() {
    this.validedValue = undefined;
    this.validationMessage = '';
    this.validity.reset();
  }

  @action
  async report(ret: methodReturn) {
    if (ret instanceof ValidationResult) {
      const { ruleName, validationMessage, injectionOptions } = ret;
      this.validity[ruleName] = true;
      this.validationMessage = validationMessage;
      this.injectionOptions = injectionOptions || {};
    }
    if (
      process.env.NODE_ENV !== 'production' &&
      !this.validity.valid &&
      typeof console !== 'undefined'
    ) {
      const { name, dataSet, record } = this.props;
      const { validationMessage } = this;
      const reportMessage: any[] = [
        'validation:',
        isString(validationMessage)
          ? validationMessage
          : await getReactNodeText(<span>{validationMessage}</span>),
      ];
      if (dataSet) {
        const { name: dsName, id } = dataSet;
        if (dsName || id) {
          reportMessage.push(
            `
[dataSet<${dsName || id}>]:`,
            dataSet,
          );
        } else {
          reportMessage.push('\n[dataSet]:', dataSet);
        }
      }
      if (record) {
        if (dataSet) {
          reportMessage.push(
            `
[record<${dataSet.indexOf(record)}>]:`,
            record,
          );
        } else {
          reportMessage.push(`\n[record]:`, record);
        }
        reportMessage.push(
          `
[field<${name}>]:`,
          record.getField(name),
        );
      } else {
        reportMessage.push('[field]:', name);
      }
      reportMessage.push('\n[value]:', this.validedValue);
      if (typeof console !== 'undefined') {
        console.warn(...reportMessage);
      }
    }
  }

  @action
  clearErrors() {
    this.validationErrorValues = [];
  }

  @action
  addError(result: ValidationResult) {
    this.validationErrorValues.push(result);
  }

  async execute(rules: validationRule[], value: any[]): Promise<any> {
    const { props } = this;
    const method = rules.shift();
    if (method) {
      const results: methodReturn[] = await Promise.all<methodReturn>(
        value.map(item => method(item, props)),
      );
      let ret: methodReturn = true;
      results.forEach(result => {
        if (result instanceof ValidationResult) {
          ret = result;
          this.addError(result);
          const index = value.indexOf(result.value);
          if (index !== -1) {
            value.splice(index, 1);
          }
        }
      });
      if (ret !== true) {
        this.report(ret);
      }
      if (value.length) {
        await this.execute(rules, value);
      }
    }
  }

  async checkValidity(value: any = null): Promise<boolean> {
    // const useCache = isEqual(this.validedValue, value);
    const useCachedResult = false;
    if (!useCachedResult) {
      this.validedValue = value;
      const valueMiss: methodReturn = valueMissing(value, this.props);
      this.clearErrors();
      if (valueMiss !== true) {
        this.report(valueMiss);
      } else {
        const { multiple } = this.props;
        await this.execute(
          validationRules.slice(),
          multiple && isArrayLike(value) ? value.slice() : [value],
        );
      }
    }
    return this.validity.valid;
  }
}
