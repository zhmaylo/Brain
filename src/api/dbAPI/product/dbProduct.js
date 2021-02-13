import * as SQLite from 'expo-sqlite';

//base connection
export class dbProduct {

    //dbName - base name
    constructor(dbName) {
        //db - reference to database
        const db = SQLite.openDatabase(dbName);
        console.log('Database opened');
        return db;
    }
}

