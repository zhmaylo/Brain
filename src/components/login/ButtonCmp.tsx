import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export const ButtonCmp = ({ title, onPressBtn, active=true }) => {
    return (
        <TouchableOpacity
            style={{
                borderColor: "white",
                borderWidth: 2,
                backgroundColor: (active)? 'lightgray' : '#f1f1f1',
                alignItems: 'center',
                justifyContent: 'center',
            }}

            onPress={() => {
                onPressBtn();
            }}
        >
            <Text style={{
                margin: 8,
                fontSize: 14,
                color: (active) ? 'black' : 'lightgray',
            }} >
                {title}</Text>
        </TouchableOpacity>
    )
}