function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_APP = '/app';

export const PATH_PAGE = {
  page403: '/403',
  page404: '/404',
  page500: '/500'
};

export const PATH_DASHBOARD = {
  root: ROOTS_APP,
  products: path(ROOTS_APP, '/products'),
};
