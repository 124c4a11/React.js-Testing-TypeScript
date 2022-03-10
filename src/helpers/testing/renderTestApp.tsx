import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { AppRouter } from '../../router/AppRouter';
import { createReduxStore, RootReducer } from '../../store';


interface RenderTestAppOptions {
  route: string;
  initialState?: RootReducer;
}


const initialOptions: RenderTestAppOptions = {
  route: '/',
}


export function renderTestApp(
  component: JSX.Element | null,
  options: RenderTestAppOptions = initialOptions
) {
  const store = createReduxStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
}
