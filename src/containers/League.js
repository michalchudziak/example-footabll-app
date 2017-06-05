/* @flow */
import React from 'react';
import { FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

import Container from 'components/Container';
import TeamTile from 'components/TeamTile';
import Separator from 'components/Separator';

import type { LeagueStore } from 'stores/leagues';

type Props = {
  navigation: any,
  leaguesStore: LeagueStore,
};

@inject('leaguesStore')
@observer
export default class League extends React.Component<void, Props, void> {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });

  render() {
    const { leagues } = this.props.leaguesStore;
    const teams: string[] = leagues
      ? leagues[this.props.navigation.state.params.index].teams
      : [];

    return (
      <Container>
        <FlatList
          data={teams}
          renderItem={({ item }) => <TeamTile>{item}</TeamTile>}
          keyExtractor={(item, index) => `${item}-${index}`}
          ItemSeparatorComponent={Separator}
        />
      </Container>
    );
  }
}
