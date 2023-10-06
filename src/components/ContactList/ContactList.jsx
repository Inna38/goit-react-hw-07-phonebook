import PropTypes from 'prop-types';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ol>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          deleteContact={deleteContact}
        />
      ))}
    </ol>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node.isRequired,
    })
  ),

  deleteContact: PropTypes.func.isRequired,
};
