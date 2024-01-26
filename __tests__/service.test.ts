import renderer from 'react-test-renderer';
import {act, render, waitFor} from '@testing-library/react-native';

import {mocks} from './__mocks__';
import {api} from '../src/service/api.movies';

describe('API', () => {
  // beforeEach(() => {
  //   jest.useFakeTimers({
  //     legacyFakeTimers: true,
  //   });
  // });

  // afterAll(() => {
  //   jest.useRealTimers();
  // });

  it('Should make a call to list movies', async () => {
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce(mocks.data);

    await api.loadMovies();

    expect(fetchMock).toBeCalledTimes(1);
  });

  it('Should test if the API has two movies', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce(mocks.data);

    const movies = await api.loadMovies();

    expect(movies?.results.length).toEqual(2);
  });

  it('Should test if mmovies is an array of movies', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce(mocks.data);

    const movies = await api.loadMovies();

    expect(Array.isArray(movies?.results)).toBe(true);
  });
});
