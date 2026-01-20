import { BrowserRouter, Routes } from 'react-router-dom';
import { userRoutes } from './user.routes';

export function Router(): React.JSX.Element {
  return (
    <BrowserRouter basename='/resume/'>
      <Routes>{userRoutes}</Routes>
    </BrowserRouter>
  );
}
