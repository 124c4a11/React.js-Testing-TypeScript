import axios from 'axios';
import { useEffect, useState } from 'react';

import { IUser } from '../../interfaces/IUser';


export function UserList(): JSX.Element {
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  async function fetchUsers() {
    try {
      setIsLoading(true);

      const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

      setUsers(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      if (err instanceof Error) setError(err.message);
      else setError('Something went wrong');
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <h2>Error: {error}</h2>

  return (
    <>
      {
        users?.length
          ?
          <ul>
            {users.map(({ id, name }) => (
              <li key={id}>{id}. {name}</li>
            ))}
          </ul>
          :
          <h2>List is empty</h2>
      }
    </>
  );
}
