import { createSlice } from '@reduxjs/toolkit';
import { loadStore } from 'utils/helpers';
import { Modal } from 'utils/types';

const initialState: Modal = {
  create_task: false,
  edit_task: false,
};
const initial = loadStore('modal', initialState);

export const modal = createSlice({
  name: 'modal',
  initialState: initial,
  reducers: {
    openModal: (state, action) => {
      for (let modal of Object.keys(state)) {
        if (modal === action.payload) state[action.payload] = true;
      }
    },
    closeModal: (state, action) => {
      for (let modal of Object.keys(state)) {
        if (modal === action.payload) state[action.payload] = false;
      }
    },
  },
});
export const { openModal, closeModal } = modal.actions;
