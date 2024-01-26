const spyOnLog = jest.spyOn(console, 'log').mockReturnValue();
const spyOnWarn = jest.spyOn(console, 'warn').mockReturnValue();

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const data = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/5AkPhazx8F0Ht74CUdJU03vNzBi.jpg',
      genre_ids: [Array],
      id: 61818,
      origin_country: [Array],
      original_language: 'en',
      original_name: 'Late Night with Seth Meyers',
      overview:
        'Seth Meyers, who is "Saturday Night Live’s" longest serving anchor on the show’s wildly popular "Weekend Update," takes over as host of NBC’s "Late Night" — home to A-list celebrity guests, memorable comedy and the best in musical talent. As the Emmy Award-winning head writer for "SNL," Meyers has established a reputation for sharp wit and perfectly timed comedy, and has gained fame for his spot-on jokes and satire. Meyers takes his departure from "SNL" to his new post at "Late Night," as Jimmy Fallon moves to "The Tonight Show".',
      popularity: 4287.751,
      poster_path: '/x5asOuPOjW21e0Ykkvkuzu1TGEl.jpg',
      first_air_date: '2014-02-25',
      name: 'Late Night with Seth Meyers',
      vote_average: 5.417,
      vote_count: 66,
    },
    {
      adult: false,
      backdrop_path: '/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg',
      genre_ids: [Array],
      id: 59941,
      origin_country: [Array],
      original_language: 'en',
      original_name: 'The Tonight Show Starring Jimmy Fallon',
      overview:
        "After Jay Leno's second retirement from the program, Jimmy Fallon stepped in as his permanent replacement. After 42 years in Los Angeles the program was brought back to New York.",
      popularity: 3732.577,
      poster_path: '/g4amxJvtpnY79J77xeamnAEUO8r.jpg',
      first_air_date: '2014-02-17',
      name: 'The Tonight Show Starring Jimmy Fallon',
      vote_average: 6.016,
      vote_count: 245,
    },
  ],
};

export const mocks = {data, navigation, spyOnLog, spyOnWarn};
