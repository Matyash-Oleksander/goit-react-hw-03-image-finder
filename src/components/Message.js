import PropTypes from 'prop-types';
import css from './css/Message.module.css';

export const Message = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

Message.propType = {
  message: PropTypes.string.isRequired,
};
