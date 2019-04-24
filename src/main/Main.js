import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Catalog from './catalog/Catalog'
import ListBeer from './listBeer/ListBeer';

export default class Main extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <View style={{flex: 1}}>
         <Catalog/>
         {/* <ListBeer/> */}
      </View>
    );
  }
}
