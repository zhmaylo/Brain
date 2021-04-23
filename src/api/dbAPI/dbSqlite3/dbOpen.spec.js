
import  {dbOpen}  from "./dbOpen";

// beforeEach(() => {

//   });
    
    describe('Testing open/close', () => {
        test(' db close in memory ',  ()  => {
           let db = new dbOpen();
           console.log('🚀 ~ file: dbOpen.spec.js ~ line 14 ~ test ~ db', db);
           let tab = db.open();
           console.log('🚀 ~ file: dbOpen.spec.js ~ line 17 ~ test ~ tab', tab);
            
        // console.log("🚀 ~ file: line 14 ~ test ~ _db", db);
        // expect(db).toBe(":memory:");
        // db.close();
    });
})

// afterAll(() => {
// dbClose(db);
// });
