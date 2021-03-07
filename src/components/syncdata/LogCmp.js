import React from 'react';
import { View, FlatList, StatusBar, StyleSheet, Text } from 'react-native';




const DATA = [
    { id: '1', title: 'First Item' },
    { id: '2', title: 'Second Item' },
    { id: '3', title: 'Third Item' },
    { id: '4', title: 'First Item' },
    { id: '5', title: 'Second Item' },
    { id: '6', title: 'Third Item' },
    { id: '7', title: 'First Item' },
    { id: '8', title: 'Second Item' },
    { id: '9', title: 'Third Item' },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

//LogCmp - output logs for SyncDataScr
export const LogCmp = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        borderColor: 'lightgray',
        borderBottomWidth: 2,
        marginHorizontal: 2,
    },
    title: {
        fontSize: 12,
    },
});