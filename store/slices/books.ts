import { createSlice, Slice, PayloadAction, Action } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Book } from '../models/Book';

export const bookSlice: Slice<Array<Book>> = createSlice({
  name: 'books',
  initialState: new Array<Book>(),
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      const newBook = action.payload;
      newBook.id = nanoid();
      newBook.createdAt = new Date();
      state.push(action.payload);
    },
    editBook: (state, action: PayloadAction<Book>) => {
      const i = state.findIndex((book) => book.id === action.payload.id);
      state[i] = action.payload;
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state = state.filter((book) => book.id != action.payload);
    },
  },
});
