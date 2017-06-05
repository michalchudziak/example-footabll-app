/* @flow */
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const TeamTile = styled.Text`
  padding-vertical: 20;
  padding-left: 10;
  width: ${Dimensions.get('window').width};
  background-color: #E6E6FA;
  font-size: 16;
`;

export default TeamTile;
