import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.unshift(action.payload);
      },
      prepare(newContact) {
        return { payload: { ...newContact, id: nanoid() } };
      },
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, setFilter } = contactSlice.actions;

export default contactSlice.reducer;
