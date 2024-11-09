import { Home } from 'presentation/pages/Home/Home.page';
import { Route } from 'react-router-dom';

export const userRoutes = [
  <Route
    key='user'
  >
    <Route>
      <Route
        path='/'
        element={<Home />}
      />
    </Route>
  </Route>
];
