/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import Separator from '../Separator';

describe('<Separator />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Separator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
