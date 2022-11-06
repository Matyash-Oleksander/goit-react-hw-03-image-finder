import { useState, useEffect } from 'react';
import { fetchPhoto } from '../api/api';
import { SearchField } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { GlobalStyle } from 'GlobalStyle';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Message } from './Message';

export const App = () => {
  const per_page = 12;
  const [photos, setPhotos] = useState([]);
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [message, setMessage] = useState(
    'To display pictures, enter a query in the search field'
  );
  const [contentLoad, setContentLoad] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setContentLoad(false);
    if (!request) {
      setContentLoad(true);
      return;
    }
    fetchPhoto(request, page, per_page).then(r => {
      if (r.hits.length === 0) {
        setMessage('Sorry, nothing was found, please try your search again');
        setContentLoad(true);
        return;
      }
      const photosContent = r.hits.map(
        ({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        })
      );
      setMessage('');
      setPhotos(prevState => [...prevState, ...photosContent]);
      setTotalPages(r.totalHits / per_page);
      setContentLoad(true);
    });
  }, [page, request]);

  const searchResponse = e => {
    e.preventDefault();
    if (!e.target.findForm.value) {
      setMessage('Please fill in the search field');
    }
    setRequest(e.target.findForm.value);
    setPage(1);
    setPhotos([]);
    e.target.reset();
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const getLargeImg = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <SearchField search={searchResponse} />
      {message && <Message message={message} />}
      <ImageGallery photos={photos} getLargeImg={getLargeImg} />
      {!contentLoad && <Loader />}
      {totalPages > page && <Button text="Load more" loadMore={loadMore} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={onCloseModal} />
      )}

      <GlobalStyle />
    </div>
  );
};
