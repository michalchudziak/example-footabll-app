/* @flow */
import { observable } from 'mobx';

export type LeagueStore = LeaguesStore;

export default class LeaguesStore {
  @observable leagues: ?(League[]) = null;

  fetchLeagues(): void {
    /* It's just dummy mock, you can replace it with an real API call. */
    this.leagues = require('../../api.json');
  }
}
