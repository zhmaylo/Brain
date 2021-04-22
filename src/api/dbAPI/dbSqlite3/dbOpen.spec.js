// const sqlite3 = require('sqlite3').verbose();

import { dbOpen } from "./dbOpen";
// let dbOp = new dbOpen();


// beforeEach(() => {
    //     db = dbOpen(db);
    // });
    
    
    describe('Testing open/close', () => {
        test(' db close in memory ', async (dpOp=dpOp)  => {
            
            // let db = await dbOp.open();
            let db = await dbOpen.open();

            console.log('🚀 ~ file: dbOpen.spec.js ~ line 16 ~ test ~ db', db);
            
        // console.log("🚀 ~ file: line 14 ~ test ~ _db", db);
        // expect(db).toBe(":memory:");
        // db.close();
    });
})

// afterAll(() => {
// dbClose(db);
// });
