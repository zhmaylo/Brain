import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title.log}</Text>
    </View>
);


//LogCmp - output logs for SyncDataScr
export const LogCmp = ({ logArr }) => {
    // console.log('LogCmp.logArr', logArr);
    let flatList = 0;
    const ListToEnd = () => {
        if (flatList != 0) flatList.scrollToEnd({ animated: true });
        // console.log('LogCmp.ListToEnd>>>flatList', flatList);
    }
    return (

        <FlatList
            data={logArr}
            ref={(ref) => {
                flatList = ref;
                // console.log('flatlist', flatList);
            }}

            renderItem={(item) => <Item title={item.item} />}
            keyExtractor={item => item.id}
            refreshing={true}
            onContentSizeChange={() => {
                ListToEnd(flatList);
            }}
        />
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