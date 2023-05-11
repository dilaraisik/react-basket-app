import {createSlice} from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: { products: [] },
  reducers: {
    add: (state, action) => {
      const exists = state.products.find((p) => p.id === action.payload.id);
      if (exists) {
        const newProducts = state.products.map((p) => {
          if (action.payload.id === p.id) {
            return {...p, quantity: p.quantity + 1};
          } else {
            return p;
          }
        });
        state.products = newProducts;
      } else {
        const product = {...action.payload, quantity: 1};
        state.products = [...state.products, product];
      }
    },
    increase: (state, action) => {
      const exists = state.products.find((p) => p.id === action.payload.id);
      if (exists) {
        const newProducts = state.products.map((p) => {
          if (action.payload.id === p.id) {
            return {...p, quantity: p.quantity + 1};
          } else {
            return p;
          }
        });
        state.products = newProducts;
      }
    },
    decrease: (state, action) => {
      const exists = state.products.find((p) => p.id === action.payload.id);
      if (exists) {
        if (exists.quantity === 1) {
          const newProducts = state.products.filter((p) => p.id !== action.payload.id);
          state.products = newProducts;
        } else {
          const newProducts = state.products.map((p) => {
            if (action.payload.id === p.id) {
              return {...p, quantity: p.quantity - 1};
            } else {
              return p;
            }
          });
          state.products = newProducts;
        }
      }
    },
    clear: (state) => {
      state.products = [];
    },
  },
})

export const {add, increase, decrease, clear} = basketSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.brands.value)`

export const selectBasket = (state) => state.basket;
export const calculateTotalPrice = (state) => state.basket.products.reduce((total, item) => total + (Number(item.price)*item.quantity), 0);

export default basketSlice.reducer