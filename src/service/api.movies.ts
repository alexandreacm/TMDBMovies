import {base_url, options} from '../constants';

const loadMovies = () => {
  return fetch(`${base_url}/popular?language=en-US&page=1`, options);
};

export const api = {loadMovies};
