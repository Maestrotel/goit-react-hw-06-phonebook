import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contact.slice';
import { getFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          onChange={onFilterChange}
          value={filter}
          type="text"
        />
      </label>
    </div>
  );
};
