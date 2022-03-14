import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Form, FormData } from './Form';


const data: FormData = {
  email: 'valid@email.mail',
  password: 'validpassword'
}


const mockedSubmit = jest.fn((data: FormData) => () => Promise.resolve(data));


describe('FORM', () => {
  it('display required error when email is empty', async () => {
    render(<Form />);

    const emailField = screen.getByLabelText('Email:');

    expect(emailField.nodeValue).toBeNull();

    fireEvent.blur(emailField);

    expect(await screen.findByText(/is required/i)).toBeInTheDocument();
  });

  it('display matching error when email is invalid', async () => {
    render(<Form />);

    const emailField = screen.getByLabelText('Email:');

    userEvent.type(emailField, 'invalid email');

    fireEvent.blur(emailField);

    expect(await screen.findByText(/does not match email format/i)).toBeInTheDocument();
  });

  it('do not display errors when email is valid', async () => {
    render(<Form />);

    const emailField = screen.getByLabelText('Email:');

    userEvent.type(emailField, data.email);
    fireEvent.blur(emailField);

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
  });

  it('display required error when password is empty', async () => {
    render(<Form />);

    const passwordField = screen.getByLabelText('Password:');

    expect(passwordField.nodeValue).toBeNull();

    fireEvent.blur(passwordField);

    expect(await screen.findByText(/is required/i)).toBeInTheDocument();
  });

  it('display min length error when password less than 3 symbols', async () => {
    render(<Form />);

    const passwordField = screen.getByLabelText('Password:');

    userEvent.type(passwordField, '1');
    fireEvent.blur(passwordField);

    expect(await screen.findByText(/cannot be less than 3 symbols/i)).toBeInTheDocument();
  });

  it('do not display errors when password is valid', async () => {
    render(<Form />);

    const passwordField = screen.getByLabelText('Password:');

    userEvent.type(passwordField, data.password);
    fireEvent.blur(passwordField);

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
  });

  it('button is disabled when one of fields is invalid', async () => {
    render(<Form />);

    fireEvent.blur(screen.getByLabelText('Email:'));

    expect(await screen.findByText(/is required/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
  });

  it('button is enabled when fields are valid', async () => {
    render(<Form />);

    const emailField = screen.getByLabelText('Email:');
    const passwordField = screen.getByLabelText('Password:');

    userEvent.type(emailField, data.email);
    fireEvent.blur(emailField);

    userEvent.type(passwordField, data.password);
    fireEvent.blur(passwordField);

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(screen.getByRole('button', { name: /submit/i })).toBeEnabled();
  });

  it('access submit', async () => {
    render(<Form onSubmit={mockedSubmit(data)} />)

    const emailField = screen.getByLabelText('Email:');
    const passwordField = screen.getByLabelText('Password:');

    userEvent.type(emailField, data.email);
    fireEvent.blur(emailField);

    userEvent.type(passwordField, data.password);
    fireEvent.blur(passwordField);

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));

    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => expect(mockedSubmit).toBeCalledTimes(1));
    expect(mockedSubmit).toHaveBeenCalledWith(data);

    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByLabelText('Email:').nodeValue).toBeNull();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByLabelText('Password:').nodeValue).toBeNull();
  });
});
