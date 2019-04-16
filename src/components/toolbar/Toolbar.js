import React, {Component} from 'react';
import { View, Image } from 'react-native';
import style from './Style';

export default class Toolbar extends Component {
  render() {
    return (
        <View style={style.toolbar}>
          <Image source={require('../../assets/logo-beer.png')} style={style.image}/>
        </View>
    );
  }
}
