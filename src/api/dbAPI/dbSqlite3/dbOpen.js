import { openDatabase } from "react-native-sqlite-storage";
import { dbConst } from "./dbConst";
let SQLite = require('react-native-sqlite-storage');
// SQLite.enablePromise(true);

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

    // let db = await SQLite.openDatabase({ name: "db.sqlite", location: 'default' });//.then(db => { return db });

    // var db =  openDatabase({ name: "db.sqlite", location: 'default' }).then(db => { return db });
    let db = await openDatabase({ name: 'UserDatabase.db' }).then(db => { return db });
    console.log('🚀 ~ file: dbOpen.js ~ line 18 ~ dbOpen ~ open ~  db', db);

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM users WHERE userName=?",  //Query to execute as prepared statement
        ['user1'],  //Argument to pass for the prepared statement
        //Callback function to handle the result
        (results) => {
          console.log(results);
        },
        (err) => {
          console.log(err);
        }
      );
    });

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