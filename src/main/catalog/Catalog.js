import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import style from './Style';

export default class Catalog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        require('../../assets/beer01.jpg'),
        require('../../assets/beer02.jpg'),
        require('../../assets/beer03.jpg'),
        require('../../assets/beer04.jpg'),
        require('../../assets/beer01.jpg'),
        require('../../assets/beer02.jpg'),
        require('../../assets/beer03.jpg'),
        require('../../assets/beer04.jpg'),
        require('../../assets/beer01.jpg'),
        require('../../assets/beer02.jpg'),
        require('../../assets/beer03.jpg'),
        require('../../assets/beer04.jpg'),
        require('../../assets/beer01.jpg'),
        require('../../assets/beer02.jpg'),
        require('../../assets/beer03.jpg'),
        require('../../assets/beer04.jpg')
      ]
    }
  }

  render() {
    return (
      <ScrollView style={style.scroll}>
        <View style={style.containerImg}>
          {this.state.list.map((el, i) =>
            <Image style={style.img} source={el} key={i}/>
          )}
        </View>
      </ScrollView>
    );
  }
}
