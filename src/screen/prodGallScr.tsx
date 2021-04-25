import React, { useContext } from 'react';
import { Button, StyleSheet, Image, View, SafeAreaView, StatusBar } from 'react-native';
import { ContextApp } from '../reducers/unionRdc';
import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';

import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../constants/otherConst';
import { ScrollView } from 'react-native-gesture-handler';
import { prodGallImages } from '../constants/prodGallConst';
import { HEADER_BUTTON_SIZE } from '../constants/headerConst';
import { PROD_GALL_HEADER_TITLE } from '../constants/headerBackConst';


//shows a gallery of product pictures 
export default function ProdGallScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    console.log('prodGallScr.state.prodCurrentRdc.prodCurrentImages=> ', state.prodCurrentRdc.prodCurrentImages);
    let currImages = state.prodCurrentRdc.prodCurrentImages;
    //dev mode. Stub.
    // currImages = prodGallImages; 
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={PROD_GALL_HEADER_TITLE} />
            <View style={styles.item} >
                {/* <Image style={styles.prodImage} source={currImages[0].large_image} />  */}
                <ScrollView
                    horizontal={true}
                    decelerationRate='fast'
                    showsHorizontalScrollIndicator={true}
                    snapToOffsets={currImages.map((x, i) => (i * WINDOW_WIDTH))}

                >
                    {/* <Image style={styles.prodImage} source={{ uri: (currImages[0].large_image) }} /> */}
                    {/* <Image style={styles.prodImage} source={{ uri: (currImages[1].large_image) }} /> */}
                    {currImages.map((x, i) =>

                        <View
                            key={x + currImages[i].priority}
                        >
                            <Image style={styles.prodImage}
                                source={{ uri: currImages[i].large_image }}
                            />
                        </View>

                    )}

                </ScrollView>

            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
    },

    item: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "white",
    },

    prodImage: {

        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT - HEADER_BUTTON_SIZE * 2,
        resizeMode: "contain",
    },
});
