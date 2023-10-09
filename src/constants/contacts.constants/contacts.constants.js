export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
};

export const addContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts.push(payload);
};

export const deleteContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};

export const handleRejected = state => {
  state.isLoading = false;
  state.error = ' ';
};
