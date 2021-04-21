// const sqlite3 = require('sqlite3').verbose();

import { dbOpen } from "./dbOpen";
let dbOp = new dbOpen();


// beforeEach(() => {
    //     db = dbOpen(db);
    // });
    
    
    describe('Testing open/close', () => {
        test(' db close in memory ', () => {
            
            let db = dbOp.open();
            console.log('🚀 ~ file: dbOpen.spec.js ~ line 1 ~ test ~ _dbOpen', _dbOpen);
        console.log('🚀 ~ file: dbOpen.spec.js ~ line 1 ~ test ~ _dbOpen', _dbOpen.open);
        // console.log("🚀 ~ file: line 14 ~ test ~ _db", db);
        // expect(db).toBe(":memory:");
        // db.close();
    });
})

// afterAll(() => {
// dbClose(db);
// });
