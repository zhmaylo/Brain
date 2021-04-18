import { dbConst } from '../common/dbConst';

const sqlite3 = require('sqlite3').verbose();
let db;

//connection to base
export class dbConnect extends dbConst {
    constructor(dbName) {
        console.log("🚀 ~ file: dbConnect.js ~ line 9 ~ dbConnect ~ constructor ~ dbName", dbName);
        super (dbName);
        dbName = dbName
        // this.connect(dbName);
    }

    //db - reference to database
    connect(dbName = super._DB_PROD_NAME) {
        this.db = new sqlite3.Database(dbName, (err) => {
            // if connect error
            if (err) {
                return console.error(err.message);
            }
            // if connect complete
            else {
                console.log('Connected to the in-memory SQlite database.');
                // console.log('Database opened');
                return (db, true);
            }
        });
    }
    async disConnect(db) {
        // close the database connection
        await db.close((err) => {
            console.error(err.message);
            return (err.message);
        });
        console.log('Close the database connection.');
        return true;
    };

}


