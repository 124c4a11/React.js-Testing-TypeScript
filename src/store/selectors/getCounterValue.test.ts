import { RootReducer } from '..';
import { getCounterValue } from './getCounterValue';

describe('GET COUNTER VALUE SELECTOR', () => {
  it('works with empty state', () => {
    expect(getCounterValue({} as RootReducer)).toBe(0);
  });

  it('works with filled state', () => {
    expect(getCounterValue({
      counter: { value: 10 }
    })).toBe(10);
  });
});
