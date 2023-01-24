import { ContactItem } from './ContactItem/ContactItem';
// import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';

export const ContactList = ({ deleteContact }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.namesList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
