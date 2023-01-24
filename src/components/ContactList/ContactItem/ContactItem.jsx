import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact.slice';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.namesItem}>
      {name}
      <span className={css.colon}> : </span>
      <span className={css.numTel}>{number}</span>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
