import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
