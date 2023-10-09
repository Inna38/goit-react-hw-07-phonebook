import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contacts.thunk';
import {
  addContactFulfilled,
  deleteContactFulfilled,
  handleFulfilled,
  handlePending,
  handleRejected,
} from 'constants/contacts.constants/contacts.constants';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, addContactFulfilled)
      .addCase(deleteContact.fulfilled, deleteContactFulfilled)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(isAnyOf(fetchContacts.fulfilled), handleFulfilled)
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export const { addContactsAction, deleteContactsAction } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
