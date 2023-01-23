import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contact.slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
