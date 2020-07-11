import React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { PROXY_URL_PC } from './../constants/urlConst';

export const ProductsCardCmp = ({item}) => {
    console.log("ProductsCardCmp=>item", item);
    console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <Text>{item.name} </Text>
            <Image  style={styles.image} 
                    source={{uri : (item.small_image)}} 
            /> 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image : {
        flex: 1,
        justifyContent: "center",
        width:100
    }
})
