/* @flow */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';

import Container from 'components/Container';
import LeagueTile from 'components/LeagueTile';

import type { LeagueStore } from 'stores/leagues';

type Props = {
  navigation: any,
  leaguesStore: LeagueStore,
};

@inject('leaguesStore')
@observer
export default class Home extends React.Component<void, Props, void> {
  static navigationOptions = {
    title: 'Leagues',
  };

  componentDidMount() {
    this.props.leaguesStore.fetchLeagues();
  }

  render() {
    const { navigation, leaguesStore: { leagues } } = this.props;

    return (
      <Container>
        {leagues
          ? leagues.map(({ name, country, color }, index) => (
              <LeagueTile
                name={name}
                country={country}
                color={color}
                key={`league-${index}`}
                onClick={() => {
                  navigation.navigate('League', { name, index });
                }}
              />
            ))
          : <ActivityIndicator animating size="large" />}
      </Container>
    );
  }
}
