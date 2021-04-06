
import { View, TextInput, StyleSheet } from 'react-native';

export const inputNumberCmp = (val) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType='number-pad'
                defaultValue='0' 
                onChangeText={(val) => {console.log("val", val)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 160,
    },

    input: {
        height: 50,
        borderColor: 'lightgrey',
        borderWidth: 1,
        textAlign: 'right',
    },

});

