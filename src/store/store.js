import {configureStore} from '@reduxjs/toolkit';
import { ProductSlice, FilterSlice } from 'store/slices';

export default configureStore({
  reducer: {
    products: ProductSlice,
    filters: FilterSlice
  },
});