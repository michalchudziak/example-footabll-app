/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import TeamTile from '../TeamTile';

describe('<TeamTile />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<TeamTile>{'Test'}</TeamTile>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
