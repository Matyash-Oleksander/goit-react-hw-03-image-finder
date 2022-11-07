import { Component } from 'react';
import Proptypes from 'prop-types';
import css from './css/Modal.module.css';

export class Modal extends Component {
  static propTypes = {
    onClose: Proptypes.func.isRequired,
    largeImageURL: Proptypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL } = this.props;
    return (
      <div className={css.overlay} onClick={this.onBackdropClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
