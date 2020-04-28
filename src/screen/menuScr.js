import React, {useContext, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ContextApp} from "../reducers/unionRdc";
import {stateToLocalStorage} from "../api/localStorage";

export default function menuScr(props) {
    const {state, dispatch} = useContext(ContextApp);
    useEffect(() => {
            // dispatch({type: 'LAST_STATE', payload: "menu"});
        stateToLocalStorage(dispatch, {type: 'LAST_STATE'}, {payload: "menu"}, state)
            console.log("dispatch({type: 'LAST_STATE', payload: \"menu\"");
    }, []);

    return (
        <View style={styles.container}>
            <Text>MenuScreen</Text>
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


