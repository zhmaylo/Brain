// const sqlite3 = require('sqlite3').verbose();

import { dbAccess } from "./dbAccess";
_dbAccess = new dbAccess(':memory:');

// beforeEach(() => {
//     db = dbOpen(db);
// });


describe('disconect', () => {
    test(' db close in memory ', async () => {

        let outdata = _dbAccess;
        expect(outdata._DB_PROD_NAME).toBe("Product.db");
        _dbAccess.dbClose(_dbAccess);
    });
})

// afterAll(() => {
// dbClose(db);
// });
