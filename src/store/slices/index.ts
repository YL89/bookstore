import bookReducer from './books';
import popupReducer from './popups';
import { combineReducers } from '@reduxjs/toolkit';

const combinedSlices = {
  books: bookReducer,
  popups: popupReducer,
};

const rootReducer = combineReducers(combinedSlices);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
