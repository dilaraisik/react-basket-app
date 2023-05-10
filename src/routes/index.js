import {Navigate, useRoutes} from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
//
import {
  // App
  ProductsPage,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // App
    {
      path: 'app',
      element: <MainLayout/>,
      children: [
        {element: <ProductsPage />, index: true},
        {path: 'app', element: <ProductsPage/>},
      ],
    },
    {path: '*', element: <Navigate to="/404" replace/>},
  ]);
}
