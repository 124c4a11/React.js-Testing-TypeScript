import counterReducer, { decrement, increment } from './counterReducer';


describe('COUNTER REDUCER', () => {
  it('increment', () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  it('decrement', () => {
    expect(counterReducer({ value: 2 }, decrement())).toEqual({ value: 1 });
  });

  it('the value cannot be less than zero', () => {
    expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: 0 });
  });

  it('works with empty state', () => {
    expect(counterReducer(undefined, decrement())).toEqual({ value: 0 });
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
  });
});
