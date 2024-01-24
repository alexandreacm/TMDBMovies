import React from 'react';
import renderer from 'react-test-renderer';
import {act, render} from '@testing-library/react-native';

import Home from '../../../src/screens/Home';
import StarRating from '../../../src/components/StarRating';

import {mocks} from '../../__mocks__';
import {NavigationContainer} from '@react-navigation/native';

describe('HOME', () => {
  const tree = renderer.create(<Home navigation={mocks.navigation} />).toJSON();

  test('Should render correctly component', () => {
    renderer.create(
      <NavigationContainer>
        <Home navigation={mocks.navigation} />
      </NavigationContainer>,
    );
  });

  // test('Should create a snapshot test correctly', () => {
  //   expect(tree).toMatchSnapshot();
  // });

  it('Should test the Header title', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Home navigation={mocks.navigation} />
      </NavigationContainer>,
    );

    expect(getByText('Popular Movies')).toBeTruthy();
  });

  it('Should render the average 8', () => {
    const {getByText} = render(<StarRating rating={{average: 8}} />);

    expect(getByText('8')).toBeTruthy();
  });
});
