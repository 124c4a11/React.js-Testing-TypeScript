import { useParams } from 'react-router-dom';


export function UserPage(): JSX.Element {
  const { id } = useParams();

  return <h1>User Id: {id}</h1>;
}
