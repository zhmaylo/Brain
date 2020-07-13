import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { WINDOW_WIDTH } from './../constants/otherConst';


export const ProductCardCmp = ({ item }) => {
    // console.log("ProductsCardCmp=>item", item);
    console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View style={styles.itemProd}>


            <Image style={styles.image}
                source={{ uri: (item.small_image) }}
            />
            <Text>{item.name} </Text>
            <Text>{item.retail_price_uah} грн </Text>
        </View>
    )
}

export const ViewListProd = ({ productList }) => {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns='1'
                horizontal={false}
                data={productList}
                // onRefresh={() => onRefresh}
                // refreshing={true}
                renderItem={({ item }) => <ProductCardCmp item={item} />}
                keyExtractor={item => item.productID}
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "contain",
        width: WINDOW_WIDTH,
      
        
    },

    image: {
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // alignContent: 'center',
        height: 50,
        width: 100,
    
        // alignSelf: 'stretch',

        paddingHorizontal:5,
        paddingVertical: 5,
    },

    itemProd : {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10,
        paddingVertical : 10,
        height: 400,
        // paddingBottom:18

    }
})
