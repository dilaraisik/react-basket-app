import {createSlice} from '@reduxjs/toolkit'
import {SORT} from "constants";

export const filterSlice = createSlice({
  name: 'filters',
  initialState: { brands: [], models: [], sort: SORT.OLD_TO_NEW, name: '' },
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
    sortBy: (state, action) => {
      state.sort = action.payload;
    },
    nameFilter: (state, action) => {
      state.name = action.payload;
    },
    clear: (state) => {
      state.brands = [];
      state.models = [];
      state.sort = '';
    },
  },
})

export const {toggleBrandFilter, toggleModelFilter, sortBy, nameFilter, clear} = filterSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.brands.value)`

export const selectBrandFilters = (state) => state.filters.brands;
export const selectModelFilters = (state) => state.filters.models;
export const selectSortOptions = (state) => state.filters.sort;
export const selectNameFilter = (state) => state.filters.name;
export const hasAppliedFilters = (state) => state.filters.brands.length > 0 || state.filters.models.length > 0 || state.filters.sort.length > 0;

export default filterSlice.reducer