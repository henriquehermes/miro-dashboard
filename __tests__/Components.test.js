import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from '../src/components/Input/InputComponent';
import Button from '../src/components/Button/ButtonComponent';
import Modal from '../src/components/Modal/ModalComponent';

describe('Input', () => {
  test('Remder Input', () => {
    const component = renderer.create(<Input />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button', () => {
  test('Remder Button', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Modal', () => {
  test('Remder Modal', () => {
    const component = renderer.create(<Modal />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
