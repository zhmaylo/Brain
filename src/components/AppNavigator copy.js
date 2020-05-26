import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import mainScr from "../screen/mainScr";
import menuScr from "../screen/menuScr";
import findScr from "../screen/findScr";
import configScr from "../screen/configScr";
import basketScr from "../screen/basketScr";

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator mode="modal" >
            <Stack.Screen name="MainScreen" component={mainScr}/>
            <Stack.Screen name="MenuScreen" component={menuScr}/>
            <Stack.Screen name="FindScreen" component={findScr}/>
            <Stack.Screen name="ConfigScreen" component={configScr}/>
            <Stack.Screen name="BasketScreen" component={basketScr}/>
            {/*<Stack.Screen options={{ headerShown: false }} name="MenuScreen" component={menuScreen}/>*/}
        </Stack.Navigator>
    </NavigationContainer>);

 export default AppNavigator;

