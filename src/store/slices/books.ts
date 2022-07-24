import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { IBook } from '../models/IBook';
import { MyBookStorage } from '../../storage/indexDb';

const db = new MyBookStorage();

interface IBookState {
  loading: Boolean;
  entities: IBook[];
  error: string | undefined;
}

const initialState: IBookState = {
  loading: true,
  entities: [],
  error: undefined,
};

const getHistoryBooks = createAsyncThunk('books/GET_ENTITIES', async (): Promise<IBook[]> => {
  const books = await db.getAll();
  return books;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      const newBook = action.payload;
      newBook.id = nanoid();
      newBook.createdAt = Date.now();
      state.entities.push(action.payload);
      db.saveOrUpdate(newBook);
    },
    updateBook: (state, action: PayloadAction<IBook>) => {
      const i = state.entities.findIndex((book) => book.id === action.payload.id);
      state.entities[i] = action.payload;
      db.saveOrUpdate(action.payload);
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.entities = state.entities.filter((book) => book.id != action.payload);
      db.remove(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHistoryBooks.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getHistoryBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
      state.error = undefined;
    });
    builder.addCase(getHistoryBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = 'failed to fetch books from local';
    });
  },
});

const { actions, reducer } = bookSlice;

const { addBook, updateBook, removeBook } = actions;

export { addBook, updateBook, removeBook, getHistoryBooks };

export default reducer;
