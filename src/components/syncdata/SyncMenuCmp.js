import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';


// const DATA = [
//     { id: '1', title: 'Очистить табл Brain' },
//     { id: '2', title: 'Очистить табл Prom' },
//     { id: '3', title: 'Синхр Brain vs Provider' },
//     { id: '4', title: 'Конверт Brain в Prom' },
//     { id: '5', title: 'Выгрузить Prom в файл' },
//     { id: '6', title: 'Выгрузить Prom в URL' }]

const WINDOW_WIDTH = Dimensions.get('window').width;
const NUM_COLUMN = 2;

// SyncMenuCmp - menu output for SyncDataScr
// menuTitleList = [{id: 1, title: 'Empty title', callback: null }]
export const SyncMenuCmp = ({ menuTitleList, getCrudLog }) => {
    // console.log('SyncMenuCmp.menuTitleList=>', menuTitleList);
    // console.log('SyncMenuCmp.menuTitleList.menuFunc=>', menuTitleList[0].menuFunc);
    return (
        <View style={{
            flex: 1,
            fontSize: 12,
            backgroundColor: 'white'
        }}>
            <ScrollView>
                <FlatList
                    data={menuTitleList}
                    renderItem={(item) =>  <MenuItem menuFunc={item.item.menuFunc} title={item.item.title} getCrudLog={getCrudLog} />}
                    keyExtractor={item => item.id}
                    numColumns={NUM_COLUMN}
                    horizontal={false}
                />
            </ScrollView>
        </View>
    )
}

const MenuItem = ({ menuFunc, title, getCrudLog }) => {
    // console.log('menuItem.title', title);
    // console.log('MenuItem.getCrudLog', getCrudLog);
    // console.log('MenuItem.menuFunc', menuFunc);
    // console.log('MenuItem.arg', arguments);
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
                // menuFunc().then(()=>{ getCrudLog(); console.log('MenuItem.getCrudLog. Promise finished')});
                menuFunc();
                getCrudLog();
                // console.log('MenuItem.getCrudLog finished');
                // console.log('button press');
                // getCrudLog();
                // console.log('button press. Callback', callback);
                // console.log('MenuItem.getCrudLog=>', tBrain.getCrudLog());

            }}
        >
            <Text style={{
                margin: 8,
                fontWeight: 400,
                fontSize: 14,
                color: 'black',
            }} >
                {title}</Text>
        </TouchableOpacity>
    )
}