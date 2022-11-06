import PropTypes from 'prop-types';
import css from './css/Searchbar.module.css';
import { ImSearch } from 'react-icons/im';

export const SearchField = ({ search }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={search}>
        <button type="submit" className={css.searchFormButton}>
          <ImSearch style={{ width: 22, height: 22 }} />
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          name="findForm"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchField.propType = {
  search: PropTypes.func.isRequired,
};
