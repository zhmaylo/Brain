import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './../constants/otherConst';
import { ContextApp } from '../reducers/unionRdc';


const { state, dispatch } = useContext(ContextApp);

let numCollumns=state.viewListProdRdc.numColumViewListProd;
const ProductCardCmp = ({ item }) => {
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


export const ViewListProd = ({ productList, numCollumns }) => {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={numCollumns}
                horizontal={false}
                data={productList}
                renderItem={({ item }) => <ProductCardCmp item={item} />}
                keyExtractor={item => item.productID}
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


        backgroundColor: "lightgray",

    },

    image: {

        height: WINDOW_HEIGHT / 3.0,
        resizeMode: "contain",

    },

    itemProd: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: "white",
        width: WINDOW_WIDTH/numCollumns,
    
        backgroundColor: "white",
        margin: 1,
        padding: 5,
        

    },
    textName: {
        fontSize: 18,
        paddingHorizontal: 5,
    },

    textPrice: {
        fontSize: 18,
        fontWeight: "700",
        paddingHorizontal: 5,
    }
})
