import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import ListBeer from './src/main/listBeer/ListBeer'
import Catalog from './src/main/catalog/Catalog'
import IconeMaterialComunity from './src/components/icons'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <>
      <StatusBar backgroundColor="#c56000" barStyle="light-content"/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: '500', color: '#ff8f00' }}>Cervejaria Beer Lounge</Text>
      </View>
      </>
    );s
  }
}

const Footer = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  ListBeer: {
    screen: ListBeer,
    navigationOptions: {
      tabBarLabel: 'Cervejas'
    }
  },
  Catalog: {
    screen: Catalog,
    navigationOptions: {
      tabBarLabel: 'Catálogo'
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#FFF',
      activeBackgroundColor: '#ff8f00',
      style: {
        backgroundColor: 'rgba(255, 143, 0, 0.7)',
      },
      tabStyle: {
      },
      labelStyle: {}
    }
  });

export default createAppContainer(Footer);