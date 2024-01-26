import React from 'react';
import renderer from 'react-test-renderer';
import {act, render, waitFor} from '@testing-library/react-native';

import Home from '../../../src/screens/Home';
import StarRating from '../../../src/components/StarRating';

import {mocks} from '../../__mocks__';
import {api} from '../../../src/services/api.movies';

describe('HOME', () => {
  // const tree = renderer.create(<Home navigation={mocks.navigation} />).toJSON();

  // beforeEach(() => {
  //   jest.useFakeTimers({
  //     legacyFakeTimers: true,
  //   });
  // });

  // afterAll(() => {
  //   jest.useRealTimers();
  // });

  test('Should render correctly component', () => {
    render(<Home navigation={mocks.navigation} />);
  });

  // // test('Should create a snapshot test correctly', () => {
  // //   expect(tree).toMatchSnapshot();
  // // });

  it('Should test the Header title', async () => {
    const {getByText} = render(<Home navigation={mocks.navigation} />);

    expect(getByText('Popular Movies')).toBeTruthy();
  });

  it('Should render the average 8', () => {
    const {getByText} = render(<StarRating rating={{average: 8}} />);

    expect(getByText('8')).toBeTruthy();
  });

  it('Should star image', () => {
    const {getByTestId} = render(<Home navigation={mocks.navigation} />);

    expect(getByTestId('imgLogo')).toBeTruthy();
  });

  it('Should test a call api to list movies', async () => {
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce(mocks.data);

    await api.loadMovies();

    expect(fetchMock).toBeCalledTimes(1);
  });

  it('Should test if the API has two movies', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce(mocks.data);

    const movies = await api.loadMovies();
    expect(movies.results.length).toEqual(2);
  });
});

// expect(Array.isArray(json)).toEqual(true)
// expect(json.length).toEqual(0)
