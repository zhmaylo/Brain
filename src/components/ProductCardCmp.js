import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './../constants/otherConst';


export const ProductCardCmp = ({ item }) => {
    // console.log("ProductsCardCmp=>item", item);
    // console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View style={styles.itemProd}>


            <Image
                style={styles.image}
                source={{ uri: (item.large_image) }}
            />            
            <Text style={styles.textName}>{item.name} </Text>
            <Text style={styles.textPrice}>{item.retail_price_uah} грн </Text>
        </View>
    )
}

const separ = () => {
    <Text>-----------</Text>
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
                ItemSeparatorComponent={separ}
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 17,
        resizeMode: "contain",
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        // paddingBottom:10,
        // paddingHorizontal: 5,
        // paddingVertical: 5,
        
    },

    image: {
      
        height: WINDOW_HEIGHT/2.3,
        resizeMode: "contain",

    },

    itemProd: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    textName: {
        fontSize: 18,
    },

    textPrice: {
        fontSize: 18,
        fontWeight: 700
    }
})
