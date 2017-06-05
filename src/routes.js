/* flow */
import { StackNavigator } from 'react-navigation';

import Home from 'containers/Home';
import League from 'containers/League';

const stackNavigatorConfig = {
  initialRouteName: 'Home',
};

export default StackNavigator(
  {
    Home: {
      screen: Home,
    },
    League: {
      screen: League,
    },
  },
  stackNavigatorConfig,
);
