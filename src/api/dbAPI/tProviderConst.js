/////////////////////////////
// Start. Section provider (table 'Brain.db')
// tProviderConst - table Provider Const



const tNameProvider = "provide.db";

export let tProviderConst =
    [{
        // tName - table name
        tName: tNameProvider,
        // qСreate - query create table 
        qСreate: "CREATE TABLE IF NOT EXISTS " + tNameProvider + "( id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)"
    }]

//
// End. Section provider (table 'Brain.db')
/////////////////////////////

