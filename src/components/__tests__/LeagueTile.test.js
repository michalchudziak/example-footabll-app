/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import LeagueTile from '../LeagueTile';

describe('<LeagueTile />', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<LeagueTile name="League" country="Poland" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
