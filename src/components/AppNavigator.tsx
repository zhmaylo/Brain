import React from 'react';
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScr from "../screen/mainScr";
import { FILTER_SCR, PROD_GALL_SCR, CATEG_SCR, SORT_SCR, PROD_SCR, MAIN_SCR, SYNC_DATA_SCR, SEARCH_SCR, SETTING_SCR } from '../constants/appNavigatorConst';
import CategoryScr from '../screen/categoryScr';
import SortScr from '../screen/sortScr';
import ProdScr from '../screen/prodScr';
import ProdGallScr from '../screen/prodGallScr';
import SyncDataScr from '../screen/syncDataScr';
import FilterScr from '../screen/filterScr';
import SettingScr from '../screen/settingScr';
import SearchScr from '../screen/searchScr';
// import menuScr from "../screen/menuScr";
// import configScr from "../screen/configScr";
// import basketScr from "../screen/basketScr";

const Drawer = createDrawerNavigator();

export const AppNavigator = () => (

    <NavigationContainer>
        <Drawer.Navigator
            drawerStyle={{ width: 0 }}
            //turn off menu
            screenOptions={{ swipeEnabled: false }}
        >

            <Drawer.Screen name={MAIN_SCR} component={MainScr} />
            <Drawer.Screen name={SETTING_SCR} component={SettingScr} />
            <Drawer.Screen name={FILTER_SCR} component={FilterScr} />
            <Drawer.Screen name={SYNC_DATA_SCR} component={SyncDataScr} />
            <Drawer.Screen name={PROD_SCR} component={ProdScr} />
            <Drawer.Screen name={CATEG_SCR} component={CategoryScr} />
            <Drawer.Screen name={SORT_SCR} component={SortScr} />
            <Drawer.Screen name={PROD_GALL_SCR} component={ProdGallScr} />
            <Drawer.Screen name={SEARCH_SCR} component={SearchScr} />

            {/* <Drawer.Screen name="MenuScreen" component={menuScr} />
            <Drawer.Screen name="ConfigScreen" component={configScr} />
            <Drawer.Screen name="BasketScreen" component={basketScr} /> */}

        </Drawer.Navigator>
    </NavigationContainer>
);

export default AppNavigator;

