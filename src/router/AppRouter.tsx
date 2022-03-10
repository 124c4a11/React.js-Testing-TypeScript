import { Route, Routes } from 'react-router-dom';

import { AboutPage, ErrorPage, HomePage, UserPage, UsersPage } from '../pages';


export function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
