import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
import counterRoute from './Counter';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    counterRoute(store),
  ],
});

export default createRoutes;
