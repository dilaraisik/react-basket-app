import {createSlice} from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filters',
  initialState: { brands: [], models: [] },
  reducers: {
    toggleBrandFilter: (state, action) => {
      if (state.brands.includes(action.payload)) {
        const newBrands = state.brands.filter((b) => b.toLowerCase() !== action.payload.toLowerCase());
        state.brands = newBrands;
      } else {
        state.brands = [...state.brands, action.payload];
      }
    },
    toggleModelFilter: (state, action) => {
      if (state.models.includes(action.payload)) {
        const newModels = state.models.filter((b) => b.toLowerCase() !== action.payload.toLowerCase());
        state.models = newModels;
      } else {
        state.models = [...state.models, action.payload];
      }
    },
    clear: (state) => {
      state.brands = [];
    },
  },
})

export const {toggleBrandFilter, toggleModelFilter, clear} = filterSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.brands.value)`

export const selectBrandFilters = (state) => state.filters.brands;
export const selectModelFilters = (state) => state.filters.models;

export default filterSlice.reducer