import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import authSlice from './slices/authSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
