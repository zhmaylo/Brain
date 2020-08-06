import React from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";


const navigationView = (
    <View style={{
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff",
        padding: 8,
        height: 300
    }}>
        <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
    </View>
);

export var DLAndroid = DrawerLayoutAndroid;

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

    return (
        <View style={styles.container} >
            <FlatList
                data={data}
                renderItem={({item}) => renderItem(item={item})}
                keyExtractor={item => item.id}
                refreshing={true}

            />
        </View>
    );
};
// export const MenuSortCmp = (drawer) => {

//     return (
//         <DLAndroid
//             drawerWidth={300}
//             drawerPosition="right"

//             renderNavigationView={() => navigationView}
//         >
//             <View style={styles.container}>
//                 <Text style={{ margin: 10, fontSize: 15 }}>
//                     DrawerLayoutAndroid example
//                 </Text>

//                 <Text style={{ margin: 10, fontSize: 15 }}>
//                     Drawer on the right! Swipe from the side to see!
//                 </Text>
//             </View>
//         </DLAndroid>

//     );
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute', 
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 50,
        backgroundColor: "#ecf0f1",
        color: 'black',
        // padding: 8,
        zIndex: 200,
        width: 400,
        height: 800
    },
    navigationContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff",
        padding: 8
    }
});

