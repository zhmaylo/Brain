const sqlite3 = require('sqlite3').verbose();

let db;

// open database in memory
export const dbOpen = () => {
    let db = new sqlite3.Database(':memory:', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });
    return db;
};


export const dbClose = async (db) => {
    // close the database connection
    await db.close((err) => {
        console.error(err.message);
        return (err.message);
    });
    console.log('Close the database connection.');
    return true;
};