import {configureStore} from '@reduxjs/toolkit';
import {ProductSlice, FilterSlice, BasketSlice} from 'store/slices';

export default configureStore({
  reducer: {
    products: ProductSlice,
    filters: FilterSlice,
    basket: BasketSlice,
  },
});