import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const getDate = (id) => {
    let date = new Date(Number(id));
    let minute = date.getMinutes();
    if (minute < 10 ) minute = '0' + minute;

    let dateOut = date.getFullYear() + '-'
        + String(Number(date.getMonth())+1) + '-'
        + date.getDate() + ' '
        + date.getHours() + ':'
        + minute + ':'
        + date.getSeconds() + '\n'; 

    // console.log('dateOut', dateOut);
    // console.log('id', id);
    // console.log('date', date.toString('yyyy MM dd'));
    return dateOut;
}

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{getDate(title.id)} {title.log}</Text>
    </View>
);


//LogCmp - output logs for SyncDataScr
export const LogCmp = ({ logArr }) => {
    // console.log('LogCmp.logArr', logArr);
    let flatList = 0;
    const ListToEnd = () => {
        // if (flatList != 0) flatList.scrollToEnd({ animated: true });
        if (flatList != 0) flatList.scrollToEnd();
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