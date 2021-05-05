import React  from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
// import { Switch } from 'react-native-gesture-handler';

// SortItemCmp - output item and get new volume of Switch (single choice)
// item - current volume of switch and current name of sorting
// onChange - callback 
export const SortItemCmp = ({item, onChange}) => {
    item=item.item;
    // console.log("SortItemCmp", item);
    // console.log("SortItemCmp. item.sortNameItem", item.item.sortNameItem);
    return (
        <View style={styles.item}>
            <View style={styles.itemViewText}>
                <Text style={styles.itemText}> {item.sortNameItem} </Text>
            </View>
            <View style={styles.itemSwitch} >
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    onValueChange={(newVolume) =>{
                        if (!item.switchOn) {item.switchOn = newVolume; //single choice
                        onChange(item)};
                    }}
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
