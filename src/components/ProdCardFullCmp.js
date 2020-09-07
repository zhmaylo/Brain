import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../constants/otherConst';
import { WARANTY_HOME, WARANTY_END, ID_HOME } from '../constants/productsConst';
import { ScrollView } from 'react-native-gesture-handler';
import { PROD_NAME, PROD_DESCRIPT } from './../constants/productsConst';


// product card
export const ProdCardFullCmp = ({ item }) => {

    console.log("ProdCardFullCmp=>item", item);
    // console.log("ProdCardFullCmp.item.retail_price_uah=> ", item.retail_price_uah);
    // console.log("ProdCardFullCmp=>item.small_image", item.small_image);

    return (

        // <View style={styles.itemProd} >
        <ScrollView style={styles.itemProd} >

            <Image
                style={styles.image}
                source={{ uri: (item.large_image) }}
            />
            <Text style={styles.textPrice}>{item.retail_price_uah} грн </Text>
            <Text style={styles.textName}>{''} </Text>
            <Text style={styles.textHeader}>{PROD_NAME} </Text>
            <Text style={styles.textName}>{item.name} </Text>
            <Text style={styles.textName}>{''} </Text>
            <Text style={styles.textHeader}>{PROD_DESCRIPT} </Text>
            <Text style={styles.textName}>{item.brief_description} </Text>
            <Text style={styles.textName}>{''} </Text>
            <Text style={styles.textName}>{WARANTY_HOME}{item.warranty}{WARANTY_END} {ID_HOME}{item.productID} </Text>
        </ScrollView>

    )
}


const styles = StyleSheet.create({

    itemProd: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-around',
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
    }
})
