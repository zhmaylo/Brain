import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FILTER_STEP } from '../../constants/filterConst';
import { inputLeftButton, inputMiddleButton, inputRightButton } from './../../api/filter/filter';
import { ShowNumberCmp } from './ShowNumberCmp';


// InputRangeCmp - input range down or up
// nameLeftButton - left button name
// nameMiddleButton - middle button name
// nameRightButton - right button name
// resetValue - dafault
// minDealerPrice -  lower range limit
// maxDealerPrice - upper range limit
// stepPercent - percentage change step
// minCmp - flag: 'false' minimum component
// minCmp - flag: 'true' maximum component

export const InputRangeCmp = ({
    minDealerPrice = 0,
    maxDealerPrice = 1000000,
    curValue = 0,
    stepPercent = FILTER_STEP,
    minFlag = true,
    onChangeCmp,
}) => {

    const nameLeftButton = ' - ';
    const nameMiddleButton = 'R';
    const nameRightButton = ' + ';
   

    return (
        <View style={styles.container}>
            <ShowNumberCmp
                curValue={curValue}
            />
            <View style={styles.butonGroup}>
                <ButtonRange title={nameLeftButton}
                    onPress={() => {
                        onChangeCmp(inputLeftButton(curValue, stepPercent, minDealerPrice));
                    }}
                />
                < ButtonRange title={nameMiddleButton}
                    onPress={() => {
                        onChangeCmp(inputMiddleButton(minDealerPrice, maxDealerPrice, minFlag));
                    }}
                />
                <ButtonRange
                    title={nameRightButton}
                    onPress={() => {
                        onChangeCmp(inputRightButton(curValue, stepPercent, maxDealerPrice));
                        
                    }}
                />
            </View>
        </View>
    )


};

// ButtonRange - range change button
// title - button name
// onPress - callback, click handling 
const ButtonRange = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={() => { onPress() }} >
            <Text style={styles.priceButton}> {title} </Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: 160,
    },


    butonGroup: {
        flexDirection: 'row',
        width: 160,
        justifyContent: 'space-between',
    },

    priceButton: {
        borderColor: "white",
        borderWidth: 1,
        height: 50,
        width: 50,
        backgroundColor: 'lightgray',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

});

