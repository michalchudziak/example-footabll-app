/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../Container';

describe('<Container />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
