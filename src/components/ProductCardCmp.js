import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './../constants/otherConst';


const ProductCardCmp = ({ item, numCol }) => {
    // console.log("ProductsCardCmp=>item", item);
    // console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View width={WINDOW_WIDTH / numCol} style={styles.itemProd} >

            <Image
                style={styles.image}
                source={{ uri: (item.large_image) }}
            />
            <Text style={styles.textName}>{item.name} </Text>
            <Text style={styles.textPrice}>{item.retail_price_uah} грн </Text>
        </View>
    )
}


export const ViewListProd = (state) => {
    // console.log("ViewListProd.state => ",state);
    let productList = state.state.productsListRdc.productsList;
    let numCollumns = state.state.viewListProdRdc.numColumViewListProd;
    // console.log("ViewListProd.productList => ", productList);
    // console.log("ViewListProd.numCollumns => ", numCollumns);

    return (
        <View style={styles.container} >
                <FlatList
                    numColumns={numCollumns}
                    horizontal={false}
                    data={productList}
                    renderItem={({ item }) => <ProductCardCmp item={item} numCol={numCollumns} />}
                    keyExtractor={item => item.productID+numCollumns}
                    key={numCollumns}
                    
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: "white",
        margin: 1,
        padding: 5,


    },
    textName: {
        fontSize: 16,
        paddingHorizontal: 5,
    },

    textPrice: {
        fontSize: 16,
        fontWeight: "700",
        paddingHorizontal: 5,
    }
})
