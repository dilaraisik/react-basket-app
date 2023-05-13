import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ProductSlice, FilterSlice, BasketSlice} from 'store/slices';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  products: ProductSlice,
  filters: FilterSlice,
  basket: BasketSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
