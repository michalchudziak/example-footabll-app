/* @flow */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'mobx-react';

import stores from 'stores';
import Routes from 'routes';

export default class FootballApp extends React.Component<void, void, void> {
  render() {
    return (
      <Provider {...stores}>
        <Routes />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FootballApp', () => FootballApp);
