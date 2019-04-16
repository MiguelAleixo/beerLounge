import React, { Component } from 'react';
import { View, Text, Alert, Button } from 'react-native';
import style from './Style';
import { IconeMaterialComunity } from '../icons';

export default class Footbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      icons: [
        { name: 'home', size: 28, color: '#212121' },
        { name: 'dots-horizontal', size: 28, color: '#212121' },
        { name: 'settings', size: 28, color: '#212121' }
      ],
      catalog: true
    }

  }
  _onPressButton() {
    this.setState(previousState => (
      { catalog: !previousState.catalog }
    ))
  }
  render() {
    return (
      <View style={style.footbar}>
        {this.state.icons.map((item, i) =>
          <IconeMaterialComunity key={i} name={item.name} size={item.size} color={item.color} onPress={this._onPressButton.bind(this)} />
        )}
        <Text> aki: {this.state.catalog ? 'verdadi' : 'farsidade'} </Text>
      </View>
    );
  }
}
