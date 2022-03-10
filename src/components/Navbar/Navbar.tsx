import { Link } from 'react-router-dom';


export function Navbar(): JSX.Element {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
  );
}
