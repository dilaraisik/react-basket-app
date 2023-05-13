import {Navigate, useRoutes} from 'react-router-dom';
import {Page404, ProductDetailPage, ProductsPage,} from './elements';
import {ErrorLayout, MainLayout} from "layouts";

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
    //Error
    {
      element: <ErrorLayout/>,
      children: [
        {path: '404', element: <Page404/>},
      ],
    },
    {path: '*', element: <Navigate to="/404" replace/>},
  ]);
}
