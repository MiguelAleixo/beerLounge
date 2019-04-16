import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import style from './Style';
import { IconeMaterialComunity } from '../../components/icons';

export default class ListBeer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                { kind: 'Pilsen' },
                { kind: 'Lager' },
                { kind: 'American Pale Ale (APA)' },
                { kind: 'Indian Pale Ale (IPA)' },
                { kind: 'WitBeer' },
                { kind: 'Porter' },
                { kind: 'Stoutch' },
                { kind: 'Red Ale' },
                { kind: 'Blond Ale' },
                { kind: 'Pilsen' },
                { kind: 'Lager' },
                { kind: 'American Pale Ale (APA)' },
                { kind: 'Indian Pale Ale (IPA)' },
                { kind: 'WitBeer' },
                { kind: 'Porter' },
                { kind: 'Stoutch' },
                { kind: 'Red Ale' },
                { kind: 'Blond Ale' }
            ]
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={style.listContainer}>
                    {this.state.list.map((item, i) =>
                        <View style={style.itemContainer} key={i}>
                            <Text key={i} style={style.itemList}> {item.kind} </Text>
                            <IconeMaterialComunity key={i + 1} name={'chevron-right'} size={28} color={'#212121'} />
                        </View>
                    )}
                </View>
            </ScrollView>
        );
    }
}