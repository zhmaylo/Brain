
import React, {useContext, useEffect} from 'react';
import {Button, StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import {ContextApp} from "../reducers/unionRdc";

import { NUMCOLUMN } from './../constants/categoryConst';
import { getMainListCategory, getNormalizeList } from './../api/category/category';
import { categoryFromFile } from './../constants/categoryJSON';


export default function categoryScr(props) {
    const {state, dispatch} = useContext(ContextApp);

    function Item({ title }) {
        return (
          <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
          </View>
        );
      }
    const dataCat = getNormalizeList(categoryFromFile);
    const ItemCategory = () => {
       
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    numColumns={NUMCOLUMN}
                    horizontal={false}

                    data={ dataCat }

                    // onEndReached={() => {currLst()}}
                    // onEndReachedThreshold={BORDER_PAGIN_INIT}
                
                    // onRefresh={() => onRefresh}
                    // refreshing={true}
                    // renderItem={({ item, index, separators }) => (                      item={item} )}
                    renderItem={({ item }) => <Item title={item.name} />}
                    keyExtractor={item => item.categoryID + ""}
                />
            </SafeAreaView>
            )
    }

    return (
        <View style={styles.container}>
        <ItemCategory/>
            {/* <Text>CategoryScreen</Text>
            <Button
                onPress={() => props.navigation.navigate('MainScreen')}
                title="Back"
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: 'white',
        padding: 3,
        marginVertical: 5,
        marginHorizontal: 3,
        alignItems: "stretch"
      },
      title: {
        fontSize: 14,
      },
});


