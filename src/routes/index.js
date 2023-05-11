import {Navigate, useRoutes} from 'react-router-dom';
import MainLayout from '../layouts/main';
import {ProductsPage,} from './elements';

export default function Router() {
  return useRoutes([
    // App
    {
      element: <MainLayout/>,
      children: [
        {path: '/', element: <Navigate to="/products" replace/>},
        {path: 'products', element: <ProductsPage/>},
      ],
    },
    {path: '*', element: <Navigate to="/404" replace/>},
  ]);
}
