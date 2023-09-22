/* eslint-disable no-console */
import { configureStore } from '@reduxjs/toolkit';
import { darkModeSlices } from './slices/dark-mode-slices';
import bookshelfSlices from './slices/bookshelf-slices';
import modalOpenSlices from './slices/modal-open-slices';

const store = configureStore({
  reducer: {
    darkMode: darkModeSlices.reducer,
    bookshelf: bookshelfSlices.reducer,
    modalOpen: modalOpenSlices.reducer,
  },
});

console.log('init state', store.getState());

store.subscribe(() => {
  console.log('store change', store.getState());
});

export default store;
