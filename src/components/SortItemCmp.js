import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

// const [isEnabled, setIsEnabled] = useState(false);
// const toggleSwitch = () => setIsEnabled(previousState => !previousState);

export const SortItemCmp = ({item, dispatch}) => {
    // console.log("SortItemCmp", item);
    return (
            <View style={styles.item}>
                <View style={styles.itemViewText}>
                    <Text style={styles.itemText}>  {item.sortNameItem} </Text>
                    {/* <Text style={styles.itemText}>  {item.sortNameItem} </Text> */}
                </View>
                <View style={styles.itemSwitch } >
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={dispatch({ type: 'PRODUCTS_LIST', payload: productsList })
                        value={item.switchOn}
                    >
                    </Switch>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        height: 50,
        justifyContent: 'space-between',
                
        borderBottomWidth: 1,
        borderColor: '#dfdfdf',
        padding: 3,
    },
    itemViewText: {
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 18,
    },
    itemSwitch: {
        justifyContent: 'center',
        fontSize: 18,
    },
});
