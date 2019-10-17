import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import LoginController from '../src/pages/Login/LoginController';

const theme = {
  primary: '#00bb77',
  secondary: '#282a36',
};

describe('Login', () => {
  test('Render login', () => {
    const wrapper = renderer.create(<LoginController theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
