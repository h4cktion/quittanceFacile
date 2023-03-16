/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { AppState } from '@/types/types';

const initialState: AppState = {
  loading: false,
  modal: null,
  closeModal: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<any>) => {
      return { ...state, modal: action.payload, closeModal: false };
    },
    setCloseModal: (state) => {
      return { ...state, closeModal: true, imageToShow: null };
    },
  },
  extraReducers: () => {
    // builder.addCase(
    //   updateClient.fulfilled,
    //   (state, action: PayloadAction<any | null>) => {
    //     return (state = {
    //       ...state,
    //       modal: null,
    //       loading: false,
    //     });
    //   }
    // );
  },
});

export const { setModal, setCloseModal } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
