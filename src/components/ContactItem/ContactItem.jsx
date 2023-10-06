import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, phone, deleteContact }) => {
  return (
    <li className={css.item}>
      <p className={css.name}>{name}</p>: {phone}
      <button
        className={css.btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
