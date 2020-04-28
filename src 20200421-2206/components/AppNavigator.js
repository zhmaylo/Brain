import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import mainScreen from "../screen/mainScreen";
import menuScreen from "../screen/menuScreen";
import findScreen from "../screen/findScreen";
import configScreen from "../screen/configScreen";
import basketScreen from "../screen/basketScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator mode="modal" >
            <Stack.Screen name="MainScreen" component={mainScreen}/>
            <Stack.Screen name="MenuScreen" component={menuScreen}/>
            <Stack.Screen name="FindScreen" component={findScreen}/>
            <Stack.Screen name="ConfigScreen" component={configScreen}/>
            <Stack.Screen name="BasketScreen" component={basketScreen}/>
            {/*<Stack.Screen options={{ headerShown: false }} name="MenuScreen" component={menuScreen}/>*/}
        </Stack.Navigator>
    </NavigationContainer>
);


export default AppNavigator;

