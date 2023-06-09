import { Suspense, lazy } from 'react';
import {LoadingScreen} from 'components';

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// APP
export const ProductsPage = Loadable(lazy(() => import('../pages/app/Products')));
export const ProductDetailPage = Loadable(lazy(() => import('../pages/app/ProductDetail')));

// ERROR
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));


