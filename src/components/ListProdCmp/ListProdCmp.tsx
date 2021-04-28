import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../constants/otherConst';
import { STEP_PAGIN_PROD } from '../../constants/productsConst';
import { setSizeListProd } from '../../api/products/products';
import { ProdCardLightCmp } from '../prodcard/ProdCardLightCmp';
import { PROD_EXPECTED } from '../../constants/productsConst';
import { PROD_SCR } from '../../constants/appNavigatorConst';


// current list size 
let currSize = 1;

// view list products
export const ListProdCmp = ({ productList, numCollumns, currSizeList, dispatch, sidAndTime, props }) => {
    // console.log("ListProdCmp.productList => ", productList);
    // console.log("ListProdCmp.numCollumns => ", numCollumns);

    if (productList.length == 0) return (
        <View style={styles.prodNoneCont}>
            <Text style={styles.prodNoneText} > {PROD_EXPECTED} </Text>
        </View>
    )
    else
        return (
            <View style={styles.container} >
                <FlatList
                    numColumns={numCollumns}
                    horizontal={false}
                    data={productList.slice(0, currSize)}
                    // renderItem={({ item }) => console.log('props=> ', props)}
                    renderItem={({ item }) =>
                        (<ProdCardLightCmp item={item}
                            props={props}
                            dispatch={dispatch}
                            sidAndTime={sidAndTime}
                        />)}
                    keyExtractor={item => item.productID + numCollumns}
                    key={numCollumns}
                    onEndReached={() => {
                        // console.log("start pagination")
                        currSize = setSizeListProd(currSizeList, STEP_PAGIN_PROD, productList.length);
                        dispatch({ type: 'SIZE_LIST_PROD', payload: currSize });
                        // console.log("currSize pagination => ", currSize);

                    }}
                    onEndReachedThreshold={2}
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

    prodNoneCont: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    prodNoneText: {
        fontWeight: "700",
        fontSize: 14,
    }

})
