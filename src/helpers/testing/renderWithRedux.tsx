import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { createReduxStore, RootReducer } from '../../store';


export function renderWithRedux(
  component: JSX.Element | null,
  initialState?: RootReducer
) {
  const store = createReduxStore(initialState);

  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
}
