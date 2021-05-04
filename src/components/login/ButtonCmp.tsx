import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export const ButtonCmp = ({ title, onPressBtn }) => {
    return (
        <TouchableOpacity
            style={{
                borderColor: "white",
                borderWidth: 2,
                backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center',
            }}

            onPress={() => {
                onPressBtn();
            }}
        >
            <Text style={{
                margin: 8,
                // weight: 400,
                fontSize: 14,
                color: 'black',
            }} >
                {title}</Text>
        </TouchableOpacity>
    )
}