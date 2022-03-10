import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Navbar } from './Navbar';
import { renderTestApp } from '../../helpers/testing/renderTestApp';


describe('NAVBAR', () => {
  it('redirect to home page', () => {
    renderTestApp(<Navbar />);

    const link = screen.getByRole('link', { name: /home/i });

    userEvent.click(link);
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
  });

  it('redirect to about page', () => {
    renderTestApp(<Navbar />);

    const link = screen.getByRole('link', { name: /about/i });

    userEvent.click(link);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });

  it('redirect to users page', () => {
    renderTestApp(<Navbar />);

    const link = screen.getByRole('link', { name: /users/i });

    userEvent.click(link);
    expect(screen.getByRole('heading', { name: /users/i })).toBeInTheDocument();
  });
});
