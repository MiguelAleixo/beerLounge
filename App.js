import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';
import Toolbar from './src/components/toolbar/Toolbar';
import Main from './src/main/Main'
import Footbar from './src/components/footbar/Footbar'
import Catalog from './src/main/catalog/Catalog'

export default class App extends Component {
  render() {
    return (
      <>
      <StatusBar backgroundColor="#c56000" barStyle="light-content"/>
      <View style={{height: '100%'}}>
        <Toolbar/>
        <Main/>
        <Footbar/>
      </View>
      </>
    );
  }
}
