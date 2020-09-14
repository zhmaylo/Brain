import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { HEADER_BUTTON_SIZE } from '../constants/headerConst';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from './../constants/otherConst';


export const SwiperBoxCmp = ({ currImages }) => {
    // console.log('SwiperBoxCmp.currImages=> ', currImages)
    console.log('SwiperBoxCmp.currImages[0].large_=> ', currImages[0].large_image)

    return (
        <View style={styles.container} >
            <ScrollView
                horizontal={true}
                decelerationRate='fast'
                showsHorizontalScrollIndicator={true}
                snapToOffsets={currImages.map((x, i) => (i * WINDOW_WIDTH))}

            >
                {currImages.map((x, i) =>
                    <Image style={styles.prodImage}
                        source={{ uri: (currImages[i].large_image) }}
                        // source={{ uri: (item.large_image) }}
                        key={currImages[i].priority}
                    />
                )}
            </ScrollView>
        </View >
    )
}




const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        backgroundColor: "white",
        paddingTop: 10,
        paddingBottom: 20,
        // marginTop: 7,

    },
    prodImage: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT / 3.0,
        resizeMode: "contain",
    },

})
