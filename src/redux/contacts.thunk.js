import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/get', async () => {
  const { data } = await axios.get(
    'https://65203841906e276284c43450.mockapi.io/contacts'
  );
  return data;
});

export const addContact = createAsyncThunk('contacts/post', async contact => {
  const { data } = await axios.post(
    'https://65203841906e276284c43450.mockapi.io/contacts',
    contact
  );
  return data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const { data } = await axios.delete(
    `https://65203841906e276284c43450.mockapi.io/contacts/${id}`
  );
  return data;
});
