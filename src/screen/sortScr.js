import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { HeaderBack } from './../components/HeaderBack';

export default function sortScr(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container} >
            <HeaderBack props={props} headerName="Сортировка" />
            <View style={styles.item}>
                <Text> Цена по возрастанию </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange= {toggleSwitch}
                    value= {isEnabled}
                >
                </Switch>
            </View>
            <Text>SortScreen</Text>
            <Button
                onPress={() => props.navigation.navigate('MainScreen')}
                title="Back to main"
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: "flex-start",

    },

    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        
    },

});
