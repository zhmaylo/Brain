import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../constants/otherConst';
import { BORDER_PAGIN_PROD, STEP_PAGIN_PROD } from '../constants/productsConst';
import { setSizeViewListProd } from '../api/products/products';
import { ProductCardCmp } from './ProductCardCmp';

let currSize=1;

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
                renderItem={({ item }) => <ProductCardCmp item={item} numCol={numCollumns} />}
                keyExtractor={item => item.productID + numCollumns}
                key={numCollumns}
                onEndReached={() => {
                    // console.log("start pagination")
                    // console.log("currSizeList, STEP_PAGIN_PROD, productList.length", 
                    //         currSizeList, STEP_PAGIN_PROD, productList.length)
                    
                    currSize = setSizeViewListProd(currSizeList, STEP_PAGIN_PROD, productList.length);
                    dispatch({ type: 'SIZE_VIEW_LIST_PROD', payload: currSize });

                    // console.log("currSize pagination => ", currSize);
                }}
                onEndReachedThreshold={BORDER_PAGIN_PROD}
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
    }
  
})
