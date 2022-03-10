import { screen } from '@testing-library/react';
import { renderTestApp } from '../helpers/testing/renderTestApp';
import { renderWithRouter } from '../helpers/testing/renderWithRouter';


describe('APP ROUTER', () => {
  it('redirect to home page', () => {
    renderTestApp(null);

    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
  });

  it('redirect to about page', () => {
    renderWithRouter(null, '/about');

    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });

  it('redirect to users page', () => {
    renderWithRouter(null, '/users');

    expect(screen.getByRole('heading', { name: /users/i })).toBeInTheDocument();
  });

  it('redirect to user page', () => {
    renderWithRouter(null, '/users/1');

    expect(screen.getByRole('heading', { name: /user id/i })).toBeInTheDocument();
  });

  it('redirect to error page', () => {
    renderWithRouter(null, '/nonexistent');

    expect(screen.getByRole('heading', { name: /error page/i })).toBeInTheDocument();
  });
});
