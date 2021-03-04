import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';




export const MenuItemCmp = ({callback=null, title='Empty', backColor = 'white', textColor='black', textAlign='center'}) => {
    return (
        <View>
            <TouchableOpacity 
            style={{
                borderColor: "black",
                borderWidth: 1,
                backgroundColor: backColor,
                borderRadius: 5,
                alignItems: textAlign=='right'?'flex-end': textAlign=='left'?'flex-start': 'center',
                                
            }}
                key='1'
                onPress={() => { console.log('button press'); callback() }}
            >
                <Text style={{ 
                        margin: 5,
                        fontWeight: 400,
                        fontSize: 18,
                        color: textColor,
                }} >
                 {title}</Text>
            </TouchableOpacity>
        </View>
    )
}

