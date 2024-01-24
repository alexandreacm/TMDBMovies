const poster_path = 'https://image.tmdb.org/t/p/';
const size_path = 'w500/';
const size_path_w220 = 'w220_and_h330_face';
const base_url = 'https://api.themoviedb.org/3/tv';

const options = {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTFlZTlhMzdlNzczOTBiMTI2MzlkMGZjYmQwNTI4NiIsInN1YiI6IjU5ZWJlYTgzYzNhMzY4MzEzZTAwMGQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImNyalqALxf1dpJlbiiEwmlvghR1VJfSOBepcr-9n_s ',
  },
};

export {poster_path, base_url, size_path, options, size_path_w220};
