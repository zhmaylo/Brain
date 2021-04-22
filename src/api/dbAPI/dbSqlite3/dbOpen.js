import { openDatabase } from "react-native-sqlite-storage";
import { dbConst } from "./dbConst";
// import * as SQLite from 'react-native-sqlite-storage';
// import {openDatabase} from 'react-native-sqlite-storage';
var SQLite = require('react-native-sqlite-storage');

//connection to base
export class dbOpen extends dbConst {
  constructor(...args) {
    super(...args);
    // this.dbName = dbName;
    // SQLite.DEBUG = true;
  };

  //db - reference to database
   open(dbName = super._DB_PROD_NAME) {
    console.log('🚀 ~ file: dbOpen.js ~ line 3 ~ SQLite', SQLite);
    // var db = openDatabase("test.db", "1.0", "Test Database", 200000 );
    // var db =  SQLite.openDatabase({ name: "db.sqlite", location: 'default' });
    var db =  openDatabase({ name: "db.sqlite", location: 'default' });
    console.log('🚀 ~ file: dbOpen.js ~ line 18 ~ dbOpen ~ open ~  db', db);
    return (db);


  }
}

// var SQLite = require('react-native-sqlite-storage');
// var db = SQLite.openDatabase({name : "db.sqlite", location: 'default'});

// db.executeSql("SELECT * FROM users WHERE userName=?",['user1'],
//             (results) => {
//               console.log(results);
//             },
//             (err) => {
//               console.log(err);
//             }
//             );