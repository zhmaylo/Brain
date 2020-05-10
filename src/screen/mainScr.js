import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";
import { fetchData } from './../api/api';


// Если мы хотим выполнить действие, мы можем получить dispatch из контекста.


export default function mainScr(props) {
    const { state, dispatch } = useContext(ContextApp);

    useEffect(() => {
        fetchData().then((json) => {
            // dispatch({ type: 'DATA_JSON', payload: json });
            // dispatch({ type: "LOADING_END", payload: true });
        });
    }, [!state.loadingState.loading]);



return (
        <View style={styles.container}>
            <Text>mainScreen!</Text>
            {/* <Button
                onPress={() => props.navigation.navigate('MenuScreen')}
                title="MenuScreen" color="#841584"  accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => props.navigation.navigate('FindScreen')}
                title="FindScreen" color="#841584"  accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => props.navigation.navigate('ConfigScreen')}
                title="ConfigScreen" color="#841584"  accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => props.navigation.navigate('BasketScreen')}
                title="BasketScreen" color="#841584"  accessibilityLabel="Learn more about this purple button"
            /> */}
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
