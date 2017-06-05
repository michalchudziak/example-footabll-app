/* @flow */
import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Separator = styled.View`
  backgroundColor: #000000;
  width: ${Dimensions.get('window').width}
  height: ${StyleSheet.hairlineWidth};
`;

export default Separator;
