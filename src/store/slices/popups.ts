import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { IBook } from '../models/IBook';

export type PopupEvents = 'ADD_BOOK' | 'UPDATE_BOOK' | 'DELETE_BOOK' | 'CLOSE' | undefined;

interface IPopupState {
  event: PopupEvents;
  entity: IBook | null;
}

const initialState: IPopupState = {
  event: undefined,
  entity: null,
};

const popupSlice = createSlice({
  name: 'popups',
  initialState: initialState,
  reducers: {
    addBookPopup: (state) => {
      state.event = 'ADD_BOOK';
    },
    updateBookPopup: (state, action: PayloadAction<IBook>) => {
      state.event = 'UPDATE_BOOK';
      state.entity = action.payload;
    },
    deleteBookPopup: (state, action: PayloadAction<IBook>) => {
      state.event = 'DELETE_BOOK';
      state.entity = action.payload;
    },
    closePopup: (state) => {
      state.event = 'CLOSE';
      state.entity = null;
    },
  },
});

const { actions, reducer } = popupSlice;

const { addBookPopup, updateBookPopup, deleteBookPopup, closePopup } = actions;

export { addBookPopup, updateBookPopup, deleteBookPopup, closePopup };

export default reducer;
