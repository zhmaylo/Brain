import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';

// spinner component
export const SpinerСmp = ({spiner_mes}) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#000000" />
            <Text>{spiner_mes}</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // justifyContent: "center",
        // alignItems: "center",
    },

})
