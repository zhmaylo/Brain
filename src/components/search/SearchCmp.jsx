import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from "react-native-gesture-handler"
import { HEADER_BUTTON_SIZE } from '../../constants/headerConst'


export const SearchCmp = () => {
    return (
        <View style={styles.container}>
            <TextInput
                valueDef='qweqwe'
                onChangeText={()=>{}}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 3,
        paddingHorizontal: 3,
        backgroundColor: 'white',
        height: HEADER_BUTTON_SIZE,
    }
})
