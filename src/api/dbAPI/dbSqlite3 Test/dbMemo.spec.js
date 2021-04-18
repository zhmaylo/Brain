// const sqlite3 = require('sqlite3').verbose();

import { dbConnect } from "./dbConnect";
_dbConnect = new dbConnect(':memory:');

// beforeEach(() => {
//     db = dbOpen(db);
// });


describe('disconect', () => {
    test(' db close in memory ', async () => {

        let outdata = _dbConnect;
        console.log("🚀 ~ file: dbMemo.spec.js ~ line 15 ~ test ~ outdata", outdata._DB_PROD_NAME);
        
        // let outdata = await connect(db);
        expect(outdata._DB_PROD_NAME).toBe("Product.db");
        _dbConnect.disConnect(_dbConnect);
    });
})

// afterAll(() => {
// dbClose(db);
// });
