import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts', async () => {
  const { data } = await axios(
    'https://65203841906e276284c43450.mockapi.io/contacts',
    {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }
  );
  return data;
});
