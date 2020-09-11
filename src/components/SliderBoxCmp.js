import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export const SLiderBoxCmp = () => {
    const images = [
        {id: '0', image: require('../icons/view2x1.png')},
        {id: '1', image: require('../icons/view2x2.png')},
        {id: '2', image: require('../icons/view2x2.png')},
        {id: '3', image: require('../icons/balance.png')},
        {id: '4', image: require('../icons/star.png')},
        {id: '5', image: require('../icons/basket.png')},
        {id: '6', image: require('../icons/profile.png')}
    ];

    return (
        <View style={styles.container} >
            <FlatList
                data={images}
                renderItem={(item) => item.image}
                keyExtractor={item => item.id}
            />
        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        backgroundColor: "white",
    },
})
