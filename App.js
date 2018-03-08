import HomeScreen from './HomeScreen'
import QuoteScreen from './QuoteScreen'
import { StackNavigator } from 'react-navigation'
import React from 'react'

const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    QuoteScreen: {
      screen: QuoteScreen
    }
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}