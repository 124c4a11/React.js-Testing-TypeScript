import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AppRouter } from '../../router/AppRouter';


export function renderWithRouter(
  component: JSX.Element | null,
  initialPath: string = '/'
) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
}
