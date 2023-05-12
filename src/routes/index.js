import {Navigate, useRoutes} from 'react-router-dom';
import MainLayout from '../layouts/main';
import {ProductDetailPage, ProductsPage,} from './elements';

export default function Router() {
  return useRoutes([
    // App
    {
      element: <MainLayout/>,
      children: [
        {path: '/', element: <Navigate to="/products" replace/>},
        {path: 'products', element: <ProductsPage/>},
        {path: 'products/:id', element: <ProductDetailPage/>},
      ],
    },
    {path: '*', element: <Navigate to="/404" replace/>},
  ]);
}
