import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '31086997-7d4570b435210b3153d61cace';

axios.defaults.baseURL = BASE_URL;

export const fetchPhoto = async (search, page, per_page) => {
  try {
    const r = await axios.get(
      `?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    );
    return r.data;
  } catch (error) {
    console.log(error);
  }
};
