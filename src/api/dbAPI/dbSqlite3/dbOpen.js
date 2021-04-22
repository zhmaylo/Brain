import { openDatabase } from "react-native-sqlite-storage";
import { dbConst } from "./dbConst";
// import * as SQLite from 'react-native-sqlite-storage';
// import {openDatabase} from 'react-native-sqlite-storage';
var SQLite = require('react-native-sqlite-storage');
SQLite.enablePromise(true);

//connection to base
export class dbOpen extends dbConst {
  constructor(...args) {
    super(...args);
    // this.dbName = dbName;
    // SQLite.DEBUG = true;
  };

  //db - reference to database
  async open(dbName = super._DB_PROD_NAME) {
    console.log('🚀 ~ file: dbOpen.js ~ line 3 ~ SQLite', SQLite);
    // let db = await openDatabase("test.db", "1.0", "Test Database", 200000 ).then(db => {return db} );
    // var db =  SQLite.openDatabase({ name: "db.sqlite", location: 'default' });
    // var db =  openDatabase({ name: "db.sqlite", location: 'default' });

    // var db = openDatabase({ name: 'UserDatabase.db' });
    var db = await openDatabase({ name: 'UserDatabase.db' }).then(db => {return db} );
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