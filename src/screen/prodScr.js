import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function prodScr(props) {
    return (
        <View style={styles.container}>
            <Text>Product Screen</Text>
            <Button
                onPress={() => props.navigation.navigate('MainScreen')}
                title="Back"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
