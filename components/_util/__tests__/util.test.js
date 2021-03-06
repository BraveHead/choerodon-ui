import throttleByAnimationFrame from '../throttleByAnimationFrame';

describe('Test utils function', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('throttle function should work', () => {
    const callback = jest.fn();
    const throttled = throttleByAnimationFrame(callback);
    expect(callback).not.toHaveBeenCalled();

    throttled();
    throttled();

    jest.runAllTimers();
    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls.length).toBe(1);
  });

  it('throttle function should be canceled', () => {
    const callback = jest.fn();
    const throttled = throttleByAnimationFrame(callback);

    throttled();
    throttled.cancel();

    jest.runAllTimers();
    expect(callback).not.toHaveBeenCalled();
  });
});
