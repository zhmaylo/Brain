import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { HeaderBack } from '../components/header/HeaderBack';

export default function sortScr(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={styles.container}>

            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName="Сортировка" />
            <View style={styles.item}>
                <Text fontWeight= "700"> Цена по возрастанию </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                >
                </Switch>
            </View>
           
            <Button 
                title="Назад"
                
                color="#2196F3"
                // color="#F0F0F0"
                onPress={() =>  props.navigation.goBack()}
                
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        paddingTop: 10,

        // flexDirection: "column",
        // alignItems: 'flex-start',
        // justifyContent: "flex-start",
    },

    item: {
        flex: 1,
        backgroundColor: "white",
        // flexDirection: "row",
        // justifyContent: "flex-start",
    },

    // buttonBack: {
    //     flex: 1,
    //     color: "#F0F0F0",
    //     backgroundColor: "#F0F0F0",
        // flexDirection: "row",
        // justifyContent: "flex-start",
    // },

});
