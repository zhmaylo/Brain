import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { HEADER_BUTTON_SIZE, TEXT_INPUT_PLACEHOLDER } from '../constants/headerConst';
import { WINDOW_WIDTH } from '../constants/otherConst';

export default function SearchScr(props) {
    return (
        <View style={styles.container}>
            <TextInput
                // style={styles.search}
                placeholder={TEXT_INPUT_PLACEHOLDER}
            >
            </TextInput>
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
    search: {
        width: WINDOW_WIDTH - 3 * HEADER_BUTTON_SIZE - 20,
        height: HEADER_BUTTON_SIZE,
        borderWidth: 2,
        paddingLeft: 4,
        marginHorizontal: 5,

    },
});
