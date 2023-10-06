import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts.thunk';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { deleteContactsAction } from 'redux/contactsSlice';
import { filterContactsAction } from 'redux/filterSlice';


export function App() {
  const dispatchApi = useDispatch()
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleFilter = e => {
    dispatch(filterContactsAction(e.target.value));
  };

  const deleteContact = id => {
    dispatch(deleteContactsAction(id));
  };

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
 dispatchApi(fetchContacts())
  }, [dispatchApi])

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} />

      <ContactList contacts={filterContact} deleteContact={deleteContact} />
    </div>
  );
}
