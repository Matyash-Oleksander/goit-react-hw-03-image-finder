import PropTypes from 'prop-types';
import css from './css/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  getLargeImg,
  largeImageURL,
}) => {
  return (
    <li className={css.galleryItem} key={id}>
      <img
        onClick={() => getLargeImg(largeImageURL)}
        className={css.galleryItemImage}
        src={webformatURL}
        alt=""
      />
    </li>
  );
};

ImageGalleryItem.propType = {
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  getLargeImg: PropTypes.func.isRequired,
};
