import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { decrement, increment } from '../../store/reducers/counterReducer';
import { getCounterValue } from '../../store/selectors/getCounterValue';


export function Counter(): JSX.Element {
  const value = useAppSelector(getCounterValue);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2 data-testid="counter-value">{value}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
}
