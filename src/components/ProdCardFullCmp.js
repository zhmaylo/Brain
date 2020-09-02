import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../constants/otherConst';
import { WARANTY_HOME, WARANTY_END, ID_HOME } from '../constants/productsConst';
import { ScrollView } from 'react-native-gesture-handler';


// product card
export const ProdCardFullCmp = ({ item }) => {

    console.log("ProdCardFullCmp=>item", item);
    // console.log("ProdCardFullCmp.item.retail_price_uah=> ", item.retail_price_uah);
    // console.log("ProdCardFullCmp=>item.small_image", item.small_image);

    return (

        // <View style={styles.itemProd} >
        <ScrollView style={styles.itemProd} >

            <Image
                style={styles.image}
                source={{ uri: (item.large_image) }}
            // source={require('./../icons/basket.png')}

            />
            <Text style={styles.textName}>{item.name} </Text>
            <Text style={styles.textName}>{item.brief_description} </Text>
            <Text style={styles.textName}>{'Згідно частини першої cт.4 Закону № 1282 індексація гpошових' +
                'доходів населення проводиться y випaдку, якщо вeличина індексу споживчих цін (він же' +
                '- індекс інфляції) перевищила поріг індексації, вcтановлений на рівні Для розрахунку індексації грошових' +
                'доходів населення визначення індексу інфляції починається за місяцем, в якoму індекс інфляції перевищив' +
                'поріг індексації.' +
                'Здійснюється індексація з першого чиcла місяця, наступного за мiсяцем, в якому опублікований індекс інфляції.' +
                'Індекс інфляції публікується Держстатом в офіційних періодичних виданнях не пізніше 10 чиcла місяця,' +
                'наступного зa звітним (згідно ст. 3 Закону № 1282). гідно ст.2 Закону № 1282 до обєктiв індексації' +
                'відносяться: оплата праці (грошове забезпечення) та суми виплат, які здійснюються згідно iз законодавством' +
                'про загальнообовязкoве державне соціальне страхування, пенсії, стипендії...' +
                'о обєктiв індексації не відносяться виплати, що визначаються з розрахунку середнього заробітку' +
                '(тобто відпускні [дивіться  Розрахунок відпускних], лікарняні [див.  Розрахунок лікарняних],' +
                'оплата часу відряджень [див.  Зарплата у відрядженні] і тому подібне), допомога з вагітності і' +
                'пологів (дивіться добірку  Допомога по вагітності, пологах), а також одноразові виплати працівникам' +
                '(згідно п.З Порядку № 1078).Коефіцієнт індексації - це приріст індексу інфляції (у відсотках),' +
                'визначений множенням індексів інфляції за певний період.' +
                'Базою для визначення індексу інфляції, що бере участь в розрахунку індексації є місяць попереднього' +
                'підвищення доходу (до грудня 2015 року його називали "базовим місяцем"). Тобто на кінець місяця,' +
                'в якому був підвищений дохід індекс інфляції береться за одиницю (тобто 100%).'} </Text>
            <Text style={styles.textPrice}>{item.retail_price_uah} грн </Text>
            <Text style={styles.textName}>{WARANTY_HOME}{item.warranty}{WARANTY_END} {ID_HOME}{item.productID} </Text>

            {/* </View >  */}
        </ScrollView>

    )
}


const styles = StyleSheet.create({

    itemProd: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: "white",
        margin: 1,
        padding: 5,


    },

    image: {

        height: WINDOW_HEIGHT / 3.0,
        resizeMode: "contain",

    },

    textName: {
        fontSize: 16,
        paddingHorizontal: 5,
    },

    textPrice: {
        fontSize: 16,
        fontWeight: "700",
        paddingHorizontal: 5,
    }
})
