// import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

describe('APP', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('renders correctly APP', () => {
    const {getByText} = render(<App />);

    expect(getByText('Popular Movies')).not.toBeNull();
  });

  it('Should test if there is a logo image', () => {
    const {getByTestId} = render(<App />);

    expect(getByTestId('imgLogo')).toBeTruthy();
  });
});
