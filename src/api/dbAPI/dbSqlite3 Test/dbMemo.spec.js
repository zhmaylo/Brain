const sqlite3 = require('sqlite3').verbose();

import {
    dbClose
} from "./dbCrud";
// let db;

// const dbOpen = () => {
//     db = new sqlite3.Database(':memory:');
//     console.log('🚀 ~ file: dbMemo.spec.js ~ line 10 ~ dbOpen ~ db', db);
    
// }


// beforeEach(() => {
//     db = dbOpen(db);
// });

test(' db close in memory ', async () => {
    let db = new sqlite3.Database(':memory:');
    console.log('🚀 ~ file: dbConnect.spec.js ~ line 13 ~ test ~ db', db);
    let outdata = await dbClose(db);
    expect(outdata).toBe(true);
});

// afterAll(() => {
//     dbClose(db);
// });