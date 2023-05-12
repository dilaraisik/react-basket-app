const ROOTS_APP = '/';

export const PATH_PAGE = {
  page403: '/403',
  page404: '/404',
  page500: '/500'
};

export const PATH_DASHBOARD = {
  root: ROOTS_APP,
  products:  '/products',
  productDetail: (id) => `/products/${id}`,
};
