import { render, screen } from '@testing-library/react';
import axios from 'axios';

import { IUser } from '../../interfaces/IUser';
import { UserList } from './UserList';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../helpers/testing/renderTestApp';


interface IResponse {
  data: IUser[];
}


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('USER LIST', () => {
  const response: IResponse = {
    data: [
      { "id": 1, "name": "Leanne Graham" },
      { "id": 2, "name": "Ervin Howell" },
      { "id": 3, "name": "Clementine Bauch" }
    ]
  };

  it('show message "loading"', () => {
    mockedAxios.get.mockResolvedValue(response);

    render(<UserList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  it('show error message', async () => {
    mockedAxios.get.mockRejectedValue(new Error('error message'));

    render(<UserList />);

    const message = await screen.findByText(/error/i);

    expect(message).toBeInTheDocument();
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  it('show error message "something wet wrong"', async () => {
    mockedAxios.get.mockRejectedValue('error message');

    render(<UserList />);

    const message = await screen.findByText(/something went wrong/i);

    expect(message).toBeInTheDocument();
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  it('show message "list is empty"', async () => {
    mockedAxios.get.mockResolvedValue([]);

    render(<UserList />);

    const message = await screen.findByText(/list is empty/i);

    expect(message).toBeInTheDocument();
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  it('render user list', async () => {
    mockedAxios.get.mockResolvedValue(response);

    renderTestApp(<UserList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    const items = await screen.findAllByRole('listitem');

    expect(screen.queryByText(/loading/i)).toBeNull();

    expect(items).toHaveLength(3);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  it('redirect to user page', async () => {
    mockedAxios.get.mockResolvedValue(response);

    renderTestApp(<UserList />);

    const links = await screen.findAllByRole('link');

    expect(links[0]).toHaveAttribute('href', expect.stringMatching(/\/users\/\d*/));

    userEvent.click(links[0]);
    expect(screen.getByRole('heading', { name: /user id/i })).toBeInTheDocument();
  });
});
