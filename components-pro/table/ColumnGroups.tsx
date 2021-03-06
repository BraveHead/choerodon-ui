import { computed } from 'mobx';
import { ColumnProps } from './Column';
import ColumnGroup from './ColumnGroup';

export default class ColumnGroups {
  columns: ColumnGroup[];

  @computed
  get wide(): number {
    return this.columns.reduce((sum, { colSpan, hidden }) => (hidden ? sum : sum + colSpan), 0);
  }

  @computed
  get deep(): number {
    return Math.max(...this.columns.map(({ deep }) => deep));
  }

  @computed
  get hidden(): boolean {
    return this.columns.every(({ hidden }) => hidden);
  }

  @computed
  get lastLeaf(): ColumnProps {
    return this.columns[this.columns.length - 1].lastLeaf;
  }

  constructor(columns: ColumnProps[]) {
    this.columns = columns.map(col => new ColumnGroup(col, this));
  }
}
