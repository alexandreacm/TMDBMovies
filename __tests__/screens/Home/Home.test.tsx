import React from 'react';
import renderer from 'react-test-renderer';
import {render, waitFor} from '@testing-library/react-native';

import Home from '../../../src/screens/Home';
import StarRating from '../../../src/components/StarRating';

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
    render(<Home />);
  });

  // test('Should create a snapshot test correctly', () => {
  //   expect(tree).toMatchSnapshot();
  // });

  it('Should test the Header title', async () => {
    const {getByText} = render(<Home />);

    expect(getByText('Popular Movies')).toBeTruthy();
  });

  it('Should render the average 8', () => {
    const {getByText, debug} = render(<StarRating rating={{average: 8}} />);

    expect(getByText('8')).toBeTruthy();
  });

  it('Should tests when the average will not passed', () => {
    const {queryByText} = render(<StarRating />);

    const value = queryByText('');

    expect(value).toBeNull();
  });

  it('Should test if the star image exist', () => {
    const {getByTestId} = render(<StarRating rating={{average: 8}} />);

    expect(getByTestId('starIcon')).toBeTruthy();
  });

  it('Should test if logo exist', () => {
    const {getByTestId} = render(<Home />);

    expect(getByTestId('imgLogo')).toBeTruthy();
  });
});
