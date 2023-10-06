import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contacts.thunk';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContactsAction: (state, { payload }) => {
      return { ...state, contacts: [...state.contacts, { ...payload }] };
    },

    deleteContactsAction: (state, { payload }) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.status = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = false;
      state.contacts = payload;
    },
    //   [fetchContacts.rejected]: (state, {payload}) => {
    // },
  },
});

export const { addContactsAction, deleteContactsAction } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
