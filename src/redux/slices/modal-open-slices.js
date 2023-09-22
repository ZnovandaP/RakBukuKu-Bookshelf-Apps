import { createSlice } from '@reduxjs/toolkit';

const modalOpenSlices = createSlice({
  name: 'modalOpen',
  initialState: {
    value: {
      isOpen: false,
      typeOpen: '',
      id: '',
    },
  },
  reducers: {
    openModalAddBook: (state, { payload }) => {
      state.value = { isOpen: payload.isOpen, typeOpen: payload.typeOpen, id: payload.id };
    },

    openModalEditBook: (state, { payload }) => {
      state.value = { isOpen: payload.isOpen, typeOpen: payload.typeOpen, id: payload.id };
    },

    openModalForCover: (state, { payload }) => {
      state.value = { isOpen: payload.isOpen, typeOpen: payload.typeOpen, id: payload.id };
    },

    closeModal: (state, { payload }) => {
      state.value = { isOpen: payload.isOpen, typeOpen: payload.typeOpen, id: payload.id };
    },
  },
});

export const {
  closeModal, openModalAddBook, openModalEditBook, openModalForCover,
} = modalOpenSlices.actions;

export default modalOpenSlices;
