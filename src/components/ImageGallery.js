import PropTypes from 'prop-types';
import css from './css/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ photos, getLargeImg }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            getLargeImg={getLargeImg}
            id={id}
            key={webformatURL}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propType = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  getLargeImg: PropTypes.func.isRequired,
};
