import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
    listContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eceff1',
        width: '100%',
        height: 52,
        lineHeight: 52,
    },
    itemList: {
        color: '#212121',
        fontSize: 24,
        fontWeight: '500'
    }
});