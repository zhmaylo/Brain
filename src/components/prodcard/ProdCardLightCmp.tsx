import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { WINDOW_HEIGHT } from '../../constants/otherConst';
import { WARANTY_HOME, WARANTY_END, ID_HOME, CODE_HOME } from '../../constants/productsConst';
import { PROD_SCR } from '../../constants/appNavigatorConst';
import { prodImgLoad } from '../../api/products/prodImgLoad';
import { getDealerPercent, getDealerUAH } from '../../api/prodCard/prodCard';
import { PROD_CURR_DESCRIPTION, PROD_CURR_IMAGES } from '../../constants/actionConst';


// product card
export const ProdCardLightCmp = ({ item, props, dispatch, sidAndTime }) => {
    // console.log('🚀 ~ file: ProdCardLightCmp.tsx ~ line 13 ~ ProdCardLightCmp ~ sidAndTime', sidAndTime);
    // console.log('🚀 ~ file: ProdCardLightCmp.tsx ~ line 13 ~ ProdCardLightCmp ~ props', props.navigation.navigate(PROD_SCR));
    // console.log('🚀 ~ file: ProdCardLightCmp.tsx ~ line 13 ~ ProdCardLightCmp ~ item', item);
    // console.log("ProductsCardLightCmp=>props", props);
    // console.log("ProductsCardCmp=>item", item);
    // console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View style={styles.itemProd}>
            <TouchableOpacity
                onPress={() => {
                    dispatch({ type: PROD_CURR_DESCRIPTION, payload: item });
                    console.log('ProdCardLightCmp.item=> ', item);
                    prodImgLoad(item.productID, sidAndTime, dispatch).then(currImages => {
                        dispatch({ type: PROD_CURR_IMAGES, payload: currImages });
                        console.log('ProdCardLightCmp.currImg=> ', currImages);
                    })
                    props.navigation.navigate(PROD_SCR);

                }}
            >
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: (item.large_image) }}
                    />
                    <Text style={styles.textName}>{item.name} </Text>
                    <Text style={styles.textPrice}>{item.price_uah + ' / ' + item.retail_price_uah} грн </Text>
                    <Text style={styles.textPrice}>{getDealerPercent(item.price_uah, item.retail_price_uah,)} % / {getDealerUAH(item.price_uah, item.retail_price_uah)} грн</Text>
                    <Text style={styles.text_warranty}>{WARANTY_HOME}{item.warranty}{WARANTY_END} {CODE_HOME}{item.product_code} {ID_HOME}{item.productID}</Text>
                    <Text style={styles.text_warranty}></Text>
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
        fontSize: 15,
        fontWeight: "700",
        paddingHorizontal: 5,
    }
})
