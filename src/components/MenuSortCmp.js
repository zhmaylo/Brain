import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { WINDOW_WIDTH } from './../constants/otherConst';
import { HEADER_BUTTON_SIZE } from "../constants/headerConst";
import Popup from "reactjs-popup";


export const MenuSortCmp = () => {
    console.log("MenuSortCmp");
    return (
        <View style={styles.container}>
          
        </View>
    );
};

// export const MenuSortCmp = () => {
//     console.log("MenuSortCmp");
//     return (
//         <View style={styles.container}>

//             <FlatList 
//                 data={data}
//                 renderItem={({item}) => renderItem(item={item})}
//                 keyExtractor={item => item.id}
//                 refreshing={true}

//             />
//         </View>
//     );
// };


const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'flex-end',
        backgroundColor: "#ecf0f1",
        padding: 5,
        marginLeft: WINDOW_WIDTH - 120,
        marginRight: 10,
        marginTop: HEADER_BUTTON_SIZE + 10,
        opacity: 1,
        zIndex: 2,
        elevation: '10',
        outlineProvider: 'bounds',

    }
});

