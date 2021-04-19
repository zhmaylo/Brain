// const sqlite3 = require('sqlite3').verbose();

import { dbAccess } from "./dbAccess";
_dbAccess = new dbAccess();

// beforeEach(() => {
//     db = dbOpen(db);
// });


describe('disconect', () => {
    test(' db close in memory ', async () => {
        let _db = await _dbAccess.dbOpen(':memory:');
        console.log("🚀 ~ file: dbAccess.spec.js ~ line 14 ~ test ~ _db", _db);
        // let outdata = _dbAccess;
        expect(_db.filename).toBe(":memory:");
        _dbAccess.dbClose(_dbAccess);
    });
})

// afterAll(() => {
// dbClose(db);
// });
