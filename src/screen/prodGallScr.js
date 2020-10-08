import React, { useContext } from 'react';
import { Button, StyleSheet, Image, View, SafeAreaView, StatusBar } from 'react-native';
import { ContextApp } from '../reducers/unionRdc';
import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { PROD_HEADER_TITLE } from '../constants/productsConst';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from './../constants/otherConst';
import { ScrollView } from 'react-native-gesture-handler';



const prodImages =[{priority: '0', 
                    full_image:  "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_main.jpg",
                    large_image:  "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_big.jpg",
                    medium_image:  "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672.jpg"},
                    {priority: '1',
                     small_image: "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_small.jpg",
                     full_image: "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_2main.jpg",
                     large_image: "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_2big.jpg",
                     medium_image: "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_2.jpg"}];
                    // (priority = 2,
                    // small_image = "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_2small.jpg",
                    // full_image = "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_3main.jpg",
                    // large_image = "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_3big.jpg",
                    // medium_image = "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_3.jpg"),
                    // (priority = 3,
                    // small_image = "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_3small.jpg",
                    // full_image = "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_4main.jpg",
                    // large_image = "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_4big.jpg",
                    // medium_image = "http://opt.brain.com.ua/static/images/prod_img/7/2/U0200672_4.jpg")];
                    



//shows a gallery of product pictures 

export default function prodGallScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    console.log('prodGallScr.state.prodCurrentRdc.prodCurrentImages=> ', state.prodCurrentRdc.prodCurrentImages);
    let currImages = state.prodCurrentRdc.prodCurrentImages;
    currImages = prodImages; 
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={PROD_HEADER_TITLE} />
            <View style={styles.item} >
                {/* <Image style={styles.prodImage} source={currImages[0].large_image} />  */}
                <ScrollView
                    horizontal={true}
                    decelerationRate='fast'
                    showsHorizontalScrollIndicator={true}
                    snapToOffsets={currImages.map((x, i) => (i * WINDOW_WIDTH))}

                >
                    <Image style={styles.prodImage} source={currImages[0].full_image} />
                    <Image style={styles.prodImage} source={currImages[1].full_image} />
                    {/* {currImages.map((x, i) =>

                         <Image style={styles.prodImage}
                             source={{ uri: currImages[i].large_image }}
                             key={x + currImages[i].priority}

                         />

                     )} */}

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
        height: WINDOW_HEIGHT,
        resizeMode: "contain",
    },
});
