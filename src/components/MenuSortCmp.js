import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { WINDOW_WIDTH } from './../constants/otherConst';
import { HEADER_BUTTON_SIZE } from "../constants/headerConst";


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
    <Text style={{ paddingVertical: 5, fontSize: 16 }}>{item.title}</Text>
);


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
        container: {
            width: '50%',
            height: '50%',
            position: 'relative',
        },
    }
    // container: {
    //     flex: 1,
    //     position: 'absolute', 
    //     justifyContent: 'flex-end',
    //     backgroundColor: "#ecf0f1",
    //     padding: 5, 
    //     marginLeft: WINDOW_WIDTH-120,
    //     marginRight: 10,
    //     marginTop: HEADER_BUTTON_SIZE+10,
    //     opacity: 1,
    //     zIndex: 2,
    //     elevation: '10',
    //     outlineProvider: 'bounds',

    // }
});

