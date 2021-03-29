import React from 'react';
import { Alert, StyleSheet, View, Button } from 'react-native';



//AlertCmp - output Dialog box
export const AlertCmp = () => {
    const createTwoButtonAlert = () =>
    
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        )
    
    return (
        <View style={styles.container}>
          {createTwoButtonAlert()}
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    }
});