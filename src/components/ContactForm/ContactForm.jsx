import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contact.slice';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const makeSubmit = e => {
    e.preventDefault();

    const contactPresent = contacts.filter(
      ({ name: currentName }) =>
        currentName.toLowerCase() === name.toLowerCase()
    );

    if (contactPresent.length) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));

    reset();
  };

  const makeChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const reset = () => {
    setFormData({
      name: '',
      number: '',
    });
  };

  const { name, number } = formData;

  return (
    <form onSubmit={makeSubmit} className={css.formSection}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={makeChange}
          required
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          className={css.formInput}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={makeChange}
          required
        />
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
