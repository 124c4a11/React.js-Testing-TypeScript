import { screen } from '@testing-library/react';

import { Counter } from './Counter';
import { renderWithRedux } from '../../helpers/testing/renderWithRedux';
import userEvent from '@testing-library/user-event';


describe('COUNTER', () => {
  it('increment', () => {
    renderWithRedux(<Counter />);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');

    const incrementBtn = screen.getByRole('button', { name: /increment/i });

    userEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  it('decrement', () => {
    renderWithRedux(<Counter />, {
      counter: { value: 10 }
    });

    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');

    const decrementBtn = screen.getByRole('button', { name: /decrement/i });

    userEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });

  it('the value cannot be less than zero', () => {
    renderWithRedux(<Counter />, {
      counter: { value: 0 }
    });

    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');

    const decrementBtn = screen.getByRole('button', { name: /decrement/i });

    userEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });
});
