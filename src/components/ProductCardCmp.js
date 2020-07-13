import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';


export const ProductCardCmp = ({ item }) => {
    console.log("ProductsCardCmp=>item", item);
    console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View style={styles.container}>


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
                numColumns={NUM_COLUMN}
                horizontal={false}
                data={productList}
                // onRefresh={() => onRefresh}
                // refreshing={true}
                renderItem={({ item }) => <ProductCartCmp item={item} />}
                keyExtractor={item => item.productID}
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: 100
    }
})
