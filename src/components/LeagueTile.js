/* @flow */
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  name: string,
  country: string,
  color?: string,
  onClick: () => void,
};

const Container = styled.TouchableOpacity`
  flex: 1;
  width: ${Dimensions.get('window').width};
  border-bottom-color: #000000;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || 'transparent'}
`;

const Title = styled.Text`
  font-size: 18;
`;

const Subtitle = styled.Text`
  font-size: 12;
`;

export default function LeagueTile({ name, country, color, onClick }: Props) {
  return (
    <Container color={color} onPress={onClick}>
      <Title>{name}</Title>
      <Subtitle>{country}</Subtitle>
    </Container>
  );
}
