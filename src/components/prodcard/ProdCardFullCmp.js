import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../constants/otherConst';
import { WARANTY_HOME, WARANTY_END, ID_HOME, CODE_HOME } from '../../constants/productsConst';
import { ScrollView } from 'react-native-gesture-handler';
import { PROD_NAME, PROD_DESCRIPT } from '../../constants/productsConst';

import { PRODUCTS_FROM_FILE } from '../../constants/productsJSON';
import { SwiperBoxCmp } from '../SwiperBoxCmp';
import { PROD_GALL_SCR } from '../../constants/appNavigatorConst';


// product card
export const ProdCardFullCmp = ({ item, currImages, props }) => {

    // console.log("ProdCardFullCmp=>item", item);
    // console.log("ProdCardFullCmp=>currImages", currImages);

    return (

        <ScrollView style={styles.itemProd} >
            <SwiperBoxCmp style={styles.swipe} currImages={currImages} props={props} />

            <Text style={styles.textPrice}>{item.retail_price_uah} грн </Text>
            <Text style={styles.textName}>{''} </Text>
            <Text style={styles.textHeader}>{PROD_NAME} </Text>
            <Text style={styles.textName}>{item.name} </Text>
            <Text style={styles.textName}>{''} </Text>
            <Text style={styles.textHeader}>{PROD_DESCRIPT} </Text>
            <Text style={styles.textName}>{item.brief_description} </Text>
            <Text style={styles.textName}>{''} </Text>
            <Text style={styles.textName}>{WARANTY_HOME}{item.warranty}{WARANTY_END} {CODE_HOME}{item.product_code} </Text>
            <Text style={styles.textName}>{ID_HOME}{item.productID} </Text>
        </ScrollView>

    )
}


const styles = StyleSheet.create({

    itemProd: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "white",
        margin: 1,
        padding: 5,
    },

    image: {

        height: WINDOW_HEIGHT / 3.0,
        resizeMode: "contain",
    },

    textHeader: {
        fontWeight: "700",
        fontSize: 14,
        paddingHorizontal: 5,
    },

    textName: {
        fontSize: 14,
        paddingHorizontal: 5,
    },

    textPrice: {
        fontSize: 16,
        fontWeight: "700",
        paddingHorizontal: 5,
    },

    swipe: {
        flex: 1,
        backgroundColor: "white",
    },
})