import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.unshift(action.payload);
      },
      prepare(newContact) {
        return { payload: { ...newContact, id: nanoid() } };
      },
    },
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;

// reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
