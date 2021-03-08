import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { clone } from './../../api/clone';
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title.log}</Text>
    </View>
);

//LogCmp - output logs for SyncDataScr
export const LogCmp = ({ logArr }) => {
    // console.log('LogCmp.logArr', logArr);

    return (
        <View>
            <FlatList
                data={logArr}
                renderItem={(item) => <Item title={item.item} />}
                keyExtractor={item => item.id}
                refreshing={true}

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
        padding: 2,
        borderColor: 'lightgray',
        borderBottomWidth: 2,
        marginHorizontal: 2,
    },
    title: {
        fontSize: 12,
    },
});