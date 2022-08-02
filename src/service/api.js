import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: { api_key: '6b956d9320e8e098b01748da89295179' },
};

export const getTrendingFilms = async () => {
  try {
    const response = await axios.get('/trending/movie/day', params);
    const filmsArray = response.data.results;
    return filmsArray;
  } catch (error) {
    toast.error('Ups... Something went wrong :(');
  }
};

export const getFilmById = async filmId => {
  try {
    const response = await axios.get(`/movie/${filmId}`, params);

    const filmsDetails = response.data;
    return filmsDetails;
  } catch (error) {
    toast.error('Ups... Something went wrong :(');
  }
};

export const getFilmCast = async filmId => {
  try {
    const response = await axios.get(`/movie/${filmId}/credits`, params);
    const filmCast = response.data.cast;
    return filmCast;
  } catch (error) {
    toast.error('Ups... Something went wrong :(');
  }
};

export const getFilmReviews = async filmId => {
  try {
    const response = await axios.get(`/movie/${filmId}/reviews`, params);
    const filmReviews = response.data.results;
    return filmReviews;
  } catch (error) {
    toast.error('Ups... Something went wrong :(');
  }
};

export const getFilmByQuery = async query => {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        ...params.params,
        query: query,
      },
    });

    const filmsByQuery = response.data.results;
    return filmsByQuery;
  } catch (error) {
    toast.error('Ups... Something went wrong :(');
  }
};
