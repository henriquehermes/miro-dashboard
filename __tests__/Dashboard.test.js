import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import DashboardController from '../src/pages/Dashboard/DashboardController';

const theme = {
  primary: '#00bb77',
  secondary: '#282a36',
};

describe('Dashboard', () => {
  test('Render Dashboard', () => {
    const wrapper = renderer
      .create(<DashboardController theme={theme} />)
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
