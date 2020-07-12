import React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { PROXY_URL_PC } from './../constants/urlConst';

export const ProductCardCmp = ({item}) => {
    console.log("ProductsCardCmp=>item", item);
    console.log("ProductsCardCmp=>item.small_image", item.small_image);
    return (
        <View style={styles.container}>
            
            <Text>{item.name} </Text>
            <Image  style={styles.image} 
                    source={{uri : (item.small_image)}} 
            /> 
            <Text>{item.retail_price_uah} грн </Text>
        </View>
    )
}

export const ViewListProd = ({ item }) => {
    return (
        <View>
            <TouchableOpacity style={styles.item}
                onPress={() => {
                    // console.log(item);
                    dataCat = getListCategory(catList, item)
                    // console.log(dataCat);
                    // console.log(catList);
                    dispatch({ type: 'VIEW_LIST_CAT', payload: dataCat });
                }
                }
            >
                <Text style={styles.title}>{item.name} </Text>
                <Text style={styles.symbCat}>{item.isChildren ? SIGN_DEEP : ''} </Text>

            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image : {
        flex: 1,
        justifyContent: "center",
        width:100
    }
})
