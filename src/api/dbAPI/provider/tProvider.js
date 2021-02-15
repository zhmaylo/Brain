import { crud } from '../common/crud';

//API for provider table

export class tProvider extends crud {

    // constructor(){};
    // constructor(...args) {
    //     super(...args);
    //   }

    //tCre
    tCreate(db, tProvName = '') {
        console.log('tProvider.tCreate => started');
        const query =
            "CREATE TABLE IF NOT EXISTS "
            +tProvName
            +" ( id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)";
        // console.log('tProvider.tCreate. db => ', db);
        // console.log('tProvider.tCreate. query => ', query);
        const tName = super.tCreate(db, query);
        console.log('tProvider.tCreate => finished');
    };
}

//обнуление локальной базы

//полная загрузка всех товаров которые есть в наличии

//выгрузка данных в локальный файл

//выгрузка данных в облако
