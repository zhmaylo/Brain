
const sqlite3 = require('sqlite3').verbose();


let db;
beforeAll(async () => {
    db = await new sqlite3.Database(':memory:');
});

describe('Testing open/close', () => {
    test(' db close in memory ', async () => {
        console.log('🚀 ~ file: dbOpen.spec.js ~ line 14 ~ test ~ db', db);

        //     db.serialize(() => {
        //         db.each(`SELECT * FROM :memory:`, (err, row) => {
        //           if (err) {
        //             console.error(err.message);
        //           }
        //           console.log(row + "\t");
        //         });
        //       });

        //       // expect(db).toBe(":memory:");
        // });
    })
})          

afterAll(() => {
    db.close();
});
