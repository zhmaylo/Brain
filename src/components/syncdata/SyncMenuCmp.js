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

const MenuItem = ({ callback, title = 'Empty' }) => {
    console.log('menuItem.title', title);

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
            onPress={() => { console.log('button press'); callback() }}
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

export const SyncMenuCmp = (callback = null, menuTitleList = [{id: 1, title: 'Empty title'}]) => {
    console.log('SyncMenuCmp.menuTitleList=>',menuTitleList );
    return (
        <View style={{
            flex: 1,
            fontSize: 12,
            backgroundColor: 'white'
        }}>
            <ScrollView>
                <FlatList
                    data={menuTitleList}
                    renderItem={(item) => <MenuItem callback={callback} title={item.item.title} />}
                    keyExtractor={item => item.id}
                    numColumns={NUM_COLUMN}
                    horizontal={false}
                />
            </ScrollView>
        </View>
    )
}

