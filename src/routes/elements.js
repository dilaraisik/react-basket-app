import { Suspense, lazy } from 'react';
// components
import {LoadingScreen} from 'components';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// APP
export const ProductsPage = Loadable(lazy(() => import('../pages/app/Products')));

