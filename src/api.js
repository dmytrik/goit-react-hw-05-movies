import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '5fe2b2c003e2bf661ee6b8424d931ac2';

export const getPopularMovie = async () => {
  try {
    const response = await axios.get('/trending/all/day', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    return null;
  }
};

export const getMovieById = async id => {
  try {
    const movie = await axios.get(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return movie.data;
  } catch {}
};
