import {configureStore} from '@reduxjs/toolkit';
import { ProductSlice } from 'store/slices';

export default configureStore({
  reducer: {
    products: ProductSlice,
  },
});