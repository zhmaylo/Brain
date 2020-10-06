import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { ContextApp } from '../reducers/unionRdc';
import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { PROD_HEADER_TITLE } from '../constants/productsConst';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from './../constants/otherConst';


//shows a gallery of product pictures 
export default function prodGallScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    console.log('prodScr.state.prodCurrentRdc.prodCurrentImages=> ', state.prodCurrentRdc.prodCurrentImages);
    let currImages = state.prodCurrentRdc.prodCurrentImages;
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={PROD_HEADER_TITLE} />
            <View style={styles.item} >

            <ScrollView
                horizontal={true}
                decelerationRate='fast'
                showsHorizontalScrollIndicator={true} 
                snapToOffsets={currImages.map((x, i) => (i * WINDOW_WIDTH ))}
                
            >
                {currImages.map((x, i) =>
                 
                    <Image style={styles.prodImage}
                        source={currImages[i].large_image}
                        key={currImages[i].priority}
                    />
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
        flexDirection: 'row',
        // justifyContent: 'space-around',
        backgroundColor: "white",
        paddingTop: 10,
        paddingBottom: 150,
        // marginTop: 7,

    },
    prodImage: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        resizeMode: "contain",
    },

});
