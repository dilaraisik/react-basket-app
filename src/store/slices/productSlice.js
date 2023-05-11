import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  reducers: {
    set: (state, action) => {
      state.products = action.payload;
    },
    add: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    remove: (state, action) => {
      const newProducts = state.products.filter((product) => product.id !== action.payload.id);
      state.products = newProducts;
    },
    clear: (state) => {
      state.products = [];
    },
  },
})

export const {set, add, remove, clear} = productSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.products.value)`

export const selectBrands = (state) => (state.products.products || [])?.map((p) => (p.brand)).filter((x, i, a) => a.indexOf(x) == i);
export const selectModels = (state) => (state.products.products || [])?.map((p) => (p.model)).filter((x, i, a) => a.indexOf(x) == i);

export default productSlice.reducer