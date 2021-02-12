/////////////////////////////
import { crud } from './crud';
//download data from supplier
/////////////////////////////

export class tProvider extends crud {
    // constructor(){};

    toConsole() {
        console.log("tProvider !!!!!!!!!!!!!!!!");
        console.log("tProvider", this.dbCreate());
    }
}

//обнуление локальной базы

//полная загрузка всех товаров которые есть в наличии

//выгрузка данных в локальный файл

//выгрузка данных в облако
