import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../helpers/testing/renderWithRouter';
import { Navbar } from './Navbar';


describe('NAVBAR', () => {
  it('redirect to home page', () => {
    renderWithRouter(<Navbar />);

    const link = screen.getByRole('link', { name: /home/i });

    userEvent.click(link);
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
  });

  it('redirect to about page', () => {
    renderWithRouter(<Navbar />);

    const link = screen.getByRole('link', { name: /about/i });

    userEvent.click(link);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });

  it('redirect to users page', () => {
    renderWithRouter(<Navbar />);

    const link = screen.getByRole('link', { name: /users/i });

    userEvent.click(link);
    expect(screen.getByRole('heading', { name: /users/i })).toBeInTheDocument();
  });
});
