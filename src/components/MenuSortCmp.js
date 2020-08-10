import React from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { stylesMain } from "../screen/mainScr";



const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    }
];

const renderItem = ({ item }) => (
    <Text>{item.title}</Text>
);

export const MenuSortCmp = () => {
    console.log("MenuSortCmp");
    return (
        <View style={styles.container}>
            
            <FlatList
                data={data}
                renderItem={({item}) => renderItem(item={item})}
                keyExtractor={item => item.id}
                refreshing={true}

            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute', 
        alignItems: 'right',
        justifyContent: 'center',
        // paddingTop: 50,
        backgroundColor: "#ecf0f1",
        paddingRight: 10, 
        opacity: 1,
        shadowOffset: 5,
        // color: 'black',
        // padding: 8,
        // zIndex: 200,
        width: 300,
        height: 800,
        // top:0,

    }
});

