import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { WINDOW_HEIGHT } from '../constants/otherConst';
import { WARANTY_HOME, WARANTY_END, ID_HOME } from '../constants/productsConst';
import { PROD_SCR } from '../constants/appNavigatorConst';
import { PROD_CURR } from '../reducers/prodCurrentRdc';

// product card
export const ProdCardLightCmp = ({item, props, dispatch}) => {
    // console.log("ProductsCardLightCmp=>props", props);
    // console.log("ProductsCardCmp=>item", item);
    // console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View style={styles.itemProd}>
            <TouchableOpacity
                onPress={() =>  {
                dispatch({ type: PROD_CURR, payload: item});
                props.navigation.navigate(PROD_SCR)}}
            >
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: (item.large_image) }}
                    />
                    <Text style={styles.textName}>{item.name} </Text>
                    <Text style={styles.textPrice}>{item.retail_price_uah} грн </Text>
                    <Text style={styles.text_warranty}>{WARANTY_HOME}{item.warranty}{WARANTY_END} {ID_HOME}{item.productID} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    itemProd: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: "white",
        margin: 1,
        padding: 5,
    },

    image: {
        height: WINDOW_HEIGHT / 5,
        resizeMode: "contain",
    },

    textName: {
        fontSize: 14,
        paddingHorizontal: 5,
    },

    text_warranty: {
        fontSize: 12,
        paddingHorizontal: 5,
    },

    textPrice: {
        fontSize: 16,
        fontWeight: "700",
        paddingHorizontal: 5,
    }
})
