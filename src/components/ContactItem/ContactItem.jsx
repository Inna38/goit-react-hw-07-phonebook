import { deleteContact } from 'redux/contacts.thunk';
import { useDispatch } from 'react-redux';

import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const deleteContactApi = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <p className={css.name}>
        {name}: {phone}
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => deleteContactApi(id)}
      >
        Delete
      </button>
    </li>
  );
};
