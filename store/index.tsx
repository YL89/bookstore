import { configureStore, Store, MiddlewareArray } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import thunk from 'redux-thunk';
import reducers, { RootState } from './slices';

const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppSelector = typeof store.getState;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
