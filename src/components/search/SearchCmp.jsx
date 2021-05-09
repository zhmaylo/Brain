import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from "react-native-gesture-handler"
import { SEARCH_REQUEST } from '../../constants/actionConst'
import { HEADER_BUTTON_SIZE } from '../../constants/headerConst'


export const SearchCmp = ({onChangeRequest, valueFromState}) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={valueFromState}
                onChangeText={(value) => {
                    onChangeRequest(SEARCH_REQUEST, value); 
                }}
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
