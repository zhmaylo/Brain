/////////////////////////////
/////////////////////////////
//CRUD (local base)
/////////////////////////////

import * as SQLite from 'expo-sqlite';
import { queryСreateBrain } from './../../constants/tblBrainConst';


//base initialization
export const createDB = () => {
    const db = SQLite.openDatabase('Brain.db');

    console.log('crud.db2', db);
    // db.transaction(tx => {
    //     tx.executeSql('INSERT INTO items (text, count) values (?, ?)', ['gibberish', 0],
    //         (txObj, resultSet) => console.log('crud._array INTO', resultSet),
    //         (txObj, error) => console.log('Error', error))
    // })


    deleteTableFromDB(db, 'brain.db');
    deleteTableFromDB(db, 'leteTable');
    // createTable(db, queryСreateBrain);
    readData(db);
    // updateData(db);

    // deleteData(db);

}

// deleteTableFromDB - deleting table from Data base 
// db - input dataBase
const deleteTableFromDB = (db, tableName = null) => {
    if (tableName == null) return false;
    db.transaction(tx => {
        tx.executeSql('DROP TABLE ? ', [tableName],
            (txObj, _array) => console.log('crud._array READ', _array),
            (txObj, error) => console.log('Error ', error)
        )
    })
}

// createTable - creating a new Data table 
const createTable = (db, query = null) => {
    if (query == null) return false;
    db.transaction(tx => {
        tx.executeSql({query})
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
        tx.executeSql('DELETE FROM items WHERE id = ? ', [id],
            (txObj, _array) => console.log('crud._array READ', _array),
            (txObj, error) => console.log('Error ', error)
        )
    })
}


// readData - Readind all Data from Data base 
// db - input dataBase
const readData = (db) => {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM items', null,
            (txObj, _array) => console.log('crud._array READ', _array),
            (txObj, error) => console.log('Error ', error)
        )
    });
}



// creating a record
// read a record
// update a record
// delete a record