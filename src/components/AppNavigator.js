import React from 'react';
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import mainScr from "../screen/mainScr";
import menuScr from "../screen/menuScr";
import findScr from "../screen/findScr";
import configScr from "../screen/configScr";
import basketScr from "../screen/basketScr";
import { menuItem } from './../constants/menuConst';
import categoryScr from './../screen/categoryScr';

const Drawer = createDrawerNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
        {/* <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} > */}
        <Drawer.Navigator
            drawerStyle={{
                // backgroundColor: '#00000',
                width: 200,
            }} >
            <Drawer.Screen name={menuItem[0]} component={categoryScr} />
            <Drawer.Screen name="MainScreen" component={mainScr} />

            <Drawer.Screen name="MenuScreen" component={menuScr} />
            <Drawer.Screen name="FindScreen" component={findScr} />
            <Drawer.Screen name="ConfigScreen" component={configScr} />
            <Drawer.Screen name="BasketScreen" component={basketScr} />
        </Drawer.Navigator>
    </NavigationContainer>
);

export default AppNavigator;

