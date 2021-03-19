import * as SQLite from 'expo-sqlite';
import { dbConst } from './dbConst';

//connection to base
export class dbProduct extends dbConst {

    //dbName - base name
    constructor(...args) {
        super(...args);
        // console.log('Database opening');
        //db - reference to database
        this._db = SQLite.openDatabase(super.DB_PROD_NAME);
        // console.log('Database opened. super.DB_PROD_NAME', super.getDB_PROD_NAME());
        // console.log('Database opened');
        return this._db;
    }

}

