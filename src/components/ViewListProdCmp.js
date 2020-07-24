import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../constants/otherConst';
import { BORDER_PAGIN_PROD, STEP_PAGIN_PROD } from '../constants/productsConst';
import { setSizeViewListProd } from './../api/products/products';

// product card
const ProductCard = ({ item, numCol }) => {
    // console.log("ProductsCardCmp=>item", item);
    // console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View width={WINDOW_WIDTH / numCol} style={styles.itemProd} >

            <Image
                style={styles.image}
                // source={{ uri: (item.large_image) }}
                source={require('./../icons/basket.png')}
            />
            <Text style={styles.textName}>{item.productID} </Text>
            <Text style={styles.textName}>{item.name} </Text>
            <Text style={styles.textPrice}>{item.retail_price_uah} грн </Text>
        </View>
    )
}

let currSize=1;

const setСurrSize = (currSize, stepPagin, maxSize) => {
    currSize = setSizeViewListProd(currSize, stepPagin, maxSize);
    return currSize;
}

// view list products
export const ViewListProdCmp = ({ productList, numCollumns, currSizeList, dispatch }) => {

    console.log("ViewListProdCmp.productList => ", productList);
    // console.log("ViewListProdCmp.numCollumns => ", numCollumns);

    return (
        <View style={styles.container} >
            <FlatList
                numColumns={numCollumns}
                horizontal={false}
                data={productList.slice(0,currSize)}
                renderItem={({ item }) => <ProductCard item={item} numCol={numCollumns} />}
                keyExtractor={item => item.productID + numCollumns}
                key={numCollumns}

                // onEndReached={() => {currViewLstProd()}}
                onEndReached={() => {
                    console.log("start pagination")
                    console.log("currSizeList, STEP_PAGIN_PROD, productList.length", 
                        currSizeList, STEP_PAGIN_PROD, productList.length)
                    currSize = setСurrSize(currSizeList, STEP_PAGIN_PROD, productList.length);
                    dispatch({ type: 'SIZE_VIEW_LIST_PROD', payload: currSize });
                    console.log("currSize pagination => ", currSize);
                }}
                onEndReachedThreshold={BORDER_PAGIN_PROD}

                // onRefresh={() => onRefresh}
                refreshing={true}
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
