import {dbConst} from "./dbConst";
const sqlite3 = require('sqlite3').verbose();

//connection to base
export class dbOpen extends dbConst {
    constructor(...args) {
        super(...args);
        // this.dbName = dbName;
    }

    //db - reference to database
    async open(dbName = super._DB_PROD_NAME) {
        let db = new sqlite3.Database(dbName, (err) => {
            // if connect error
            if (err) {
                return console.error(err.message);
            }
            // connect complete
            // console.log('Database opened');
        });
        return db;
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


