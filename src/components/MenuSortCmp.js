import React from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

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


export const MenuSortCmp = () => {
    
    return (
        <DLAndroid
            drawerWidth={300}
            drawerPosition="right"
            // drawerLockMode= "locked-closed"
            
            renderNavigationView={() => navigationView}
        >
            <View style={styles.container}>
                <Text style={{ margin: 10, fontSize: 15 }}>
                    DrawerLayoutAndroid example
                </Text>
                
                <Text style={{ margin: 10, fontSize: 15 }}>
                    Drawer on the right! Swipe from the side to see!
                </Text>
            </View>
        </DLAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    navigationContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff",
        padding: 8
      }
});

