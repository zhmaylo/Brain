import { dbConst } from "./dbConst";
import {SQLite} from 'react-native-sqlite-storage';

//connection to base
export class dbOpen extends dbConst {
    constructor(...args) {
        super(...args);
        // this.dbName = dbName;
    }

    //db - reference to database
    open(dbName = super._DB_PROD_NAME) {
        
        global.db = SQLite.openDatabase(
            {
              name: 'SQLite',
              location: 'default',
              createFromLocation: '~SQLite.db',
            },
            () => { },
            error => {
              console.log("ERROR: " + error);
            }
          );

        // var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000,
        //     () => { console.log("Database OPENED") },
        //     (err) => { console.log("SQL Error: " + err )});
        // return db;
        return (':memory:');
    }

    // async dbClose(db) {
    //     // close the database connection
    //     await db.close((err) => {
    //         console.log(err.message);
    //         return (err.message);
    //     });
    //     console.log('Close the database connection.');
    //     return true;
    // };

}


