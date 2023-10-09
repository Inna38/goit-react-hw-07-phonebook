import { React } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts.thunk';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.number.value;

    const userContacts = contacts.find(contact => contact.name === name);

    if (userContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone, id: nanoid() }));

    const form = e.currentTarget;
    form.reset();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            id="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor="tel" className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            id="tel"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submite">
          Add contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
