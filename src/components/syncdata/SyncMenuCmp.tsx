import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';


const WINDOW_WIDTH = Dimensions.get('window').width;
const NUM_COLUMN = 2;

// SyncMenuCmp - menu output for SyncDataScr
// menuTitleList = [{id: 1, title: 'Empty title', callback: null }]
export const SyncMenuCmp = ({ menuTitleList, state, dispatch }) => {
    // console.log('SyncMenuCmp.menuTitleList=>', menuTitleList);
    // console.log('SyncMenuCmp.menuTitleList.menuFunc=>', menuTitleList[0].menuFunc);
    return (
        <View style={{
            flex: 1,
            fontSize: 12,
            backgroundColor: 'white'
        }}>

            <FlatList
                data={menuTitleList}
                renderItem={(item) => <MenuItem menuFunc={item.item.menuFunc} title={item.item.title} state={state} dispatch={dispatch} />}
                keyExtractor={item => item.id}
                numColumns={NUM_COLUMN}
                horizontal={false}
            />

        </View>
    )
}

const MenuItem = ({ menuFunc, title, state, dispatch }) => {
    // console.log('menuItem.title', title);
    // console.log('MenuItem.getCrudLog', getCrudLog);
    // console.log('MenuItem.menuFunc', menuFunc);
    // console.log('MenuItem.arg', arguments);
    // console.log('MenuItem.dispatch', dispatch);
    // console.log('MenuItem.typeof clearBrainTbl', typeof clearBrainTbl);
    return (
        <TouchableOpacity
            style={{
                borderColor: "white",
                borderWidth: 2,
                backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center',
                width: WINDOW_WIDTH / NUM_COLUMN,
            }}

            onPress={() => {
                menuFunc(state = state, dispatch = dispatch);
            }}
        >
            <Text style={{
                margin: 8,
                // weight: 400,
                fontSize: 14,
                color: 'black',
            }} >
                {title}</Text>
        </TouchableOpacity>
    )
}