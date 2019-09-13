import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchScreen from './src/components/SearchScreen/SearchScreen.native';
import SplashScreen from './src/components/SplashScreen/SplashScreen.native';
import BookProScreen from './src/components/BookProScreen/BookProScreen.native';
import ConfirmBookProScreen from './src/components/ConfirmBookProScreen/ConfirmBookProScreen.native';
import BookingConfirmedScreen from './src/components/BookingConfirmedScreen/BookingConfirmedScreen.native';

export default App = StackNavigator(
  {
    Home: { screen: SearchScreen },
    Splash: { screen: SplashScreen },
    BookPro: { screen: BookProScreen },
    ConfirmBookPro: { screen: ConfirmBookProScreen },
    BookingConfirmed: { screen: BookingConfirmedScreen }
  },
  {
    initialRouteName: 'Splash',
    //headerMode: 'screen',
    navigationOptions: {
      title: 'Demo',
      headerStyle: {
        height: 65,
        backgroundColor: '#238c59',
        marginBottom: 5,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        paddingTop: 10
      },
      headerTitleStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 'bold',
        color: 'white'
      }
    }
  }
);

AppRegistry.registerComponent('nytimes', () => App);

/**
 * https://stackoverflow.com/questions/34329715/how-to-add-icons-to-react-native-app
 */
