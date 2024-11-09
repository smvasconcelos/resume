import { BrowserRouter, Routes } from 'react-router-dom';
import { userRoutes } from './user.routes';

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>{userRoutes}</Routes>
    </BrowserRouter>
  );
}
