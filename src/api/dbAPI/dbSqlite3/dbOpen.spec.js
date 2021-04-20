// const sqlite3 = require('sqlite3').verbose();

import { dbOpen } from "./dbOpen";
let _dbOpen = new dbOpen();

// beforeEach(() => {
//     db = dbOpen(db);
// });


describe('Testing open/close', () => {
    test(' db close in memory ', async () => {
        let db = await _dbOpen.open(':memory:');
        console.log("🚀 ~ file: line 14 ~ test ~ _db", db);
        expect(db.filename).toBe(":memory:");
        db.close();
    });
})

// afterAll(() => {
// dbClose(db);
// });
