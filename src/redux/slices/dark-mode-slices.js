import { createSlice } from '@reduxjs/toolkit';

const darkModeSlices = createSlice({
  name: 'darkMode',
  initialState: {
    value: JSON.parse(localStorage.getItem('DARK_THEME')) ?? false,
  },
  reducers: {
    toggleDarkMode: (state, actions) => {
      state.value = actions.payload.darkMode;
    },
  },
});

const { toggleDarkMode } = darkModeSlices.actions;

export { darkModeSlices, toggleDarkMode };
