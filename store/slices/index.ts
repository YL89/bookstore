import { bookSlice } from './books';
import { combineReducers, Reducer } from '@reduxjs/toolkit';

const combinedSlices = {
  books: bookSlice.reducer,
};

const rootReducer = combineReducers(combinedSlices);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
