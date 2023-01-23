import { ContactItem } from './ContactItem/ContactItem';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = ({ deleteContact }) => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <ul className={css.namesList}>
      {contacts.map(({ id, name, number }) => (
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

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
