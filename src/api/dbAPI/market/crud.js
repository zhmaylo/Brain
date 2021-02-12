/////////////////////////////
//CRUD (local base)
/////////////////////////////

import * as SQLite from 'expo-sqlite';
import { tProviderConst } from '../provider/tProviderConst';



//dbCreate - base initialization
//qCreate - query create table (type: string)
export const dbCreate = (dbName = '') => {
    const db = SQLite.openDatabase(dbName);
    return db;
}

// tCreate - table creating a new Data table 
export const tCreate = (db, query = null) => {

    if (query == null) return false;
    db.transaction(tx => {
        tx.executeSql(query)
    })
}

// insertData - updating a row from Data base 
const insertData = (db, id = null, data = null) => {
    // if ((id == null) || (data == null)) return false;

    db.transaction(tx => {
        tx.executeSql('INSERT INTO items (text, count) values (?, ?)', ['gibberish', 0],
            (txObj, resultSet) => console.log('crud._array INTO', resultSet),
            (txObj, error) => console.log('Error', error))
    })
}

// updateData - updating a row from Data base 
// db - input dataBase
// id - id of item (number)
// data - data for update
// return false - not data for processing
const updateData = (db, id = null, data = null) => {
    if ((id == null) || (data == null)) return false;
    db.transaction(tx => {
        tx.executeSql('UPDATE items SET count = ? WHERE id = ?', [data, id],
            (txObj, _array) => console.log('crud._array UPDATE', _array),
            (txObj, error) => console.log('Error ', error)
        )
    })
}




// deleteData - deleting a row from Data base 
// db - input dataBase
// id - id of item (number)
// return false - not data for processing
const deleteData = (db, id = null) => {
    if (id == null) return false;
    db.transaction(tx => {
        tx.executeSql('DELETE FROM items WHERE id > ? ', [id],
            (txObj, _array) => console.log('crud._array READ', _array),
            (txObj, error) => console.log('Error ', error)
        )
    })
}


const deleteAllData = (db) => {

    db.transaction(tx => {
        tx.executeSql('DELETE FROM items', [],
            (txObj, _array) => console.log('crud._array Zero Base', _array),
            (txObj, error) => console.log('Error ', error)
        )
    })
}



// readData - Readind all Data from Data base 
// db - input dataBase
const readData = (db) => {
    if (db == null) return false;
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM items', null,
            (txObj, _array) => console.log('crud._array READ (length)', _array.rows),
            (txObj, error) => console.log('Error ', error)
        )
    });
}



// creating a record
// read a record
// update a record
// delete a record