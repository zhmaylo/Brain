import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../constants/otherConst';
import { WARANTY_HOME, WARANTY_END, ID_HOME } from '../constants/productsConst';
import { ProdCardFullCmp } from './ProdCardFullCmp';

// product card
export const ProdCardLightCmp = ( item, numCol ) => {
    item = item.item;
    // console.log("ProductsCardCmp=>item", item);
    // console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View style={styles.itemProd} width={WINDOW_WIDTH / numCol} >
            <TouchableOpacity
                onPress={() => ProdCardFullCmp (item, numCol)}
                
            >
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: (item.large_image) }}
                    // source={require('./../icons/basket.png')}
                    />
                    <Text style={styles.textName}>{item.name} </Text>
                    <Text style={styles.textPrice}>{item.retail_price_uah} грн </Text>
                    <Text style={styles.textName}>{WARANTY_HOME}{item.warranty}{WARANTY_END} {ID_HOME}{item.productID} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
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
