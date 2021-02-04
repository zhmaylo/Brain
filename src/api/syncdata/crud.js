/////////////////////////////
/////////////////////////////
//CRUD (local base)
/////////////////////////////

import * as SQLite from 'expo-sqlite';

//base initialization
export const createDB = () => {
    const db = SQLite.openDatabase('Brain.db');
    console.log('crud.db', db);
    let rows = '22222';
    // const text='12345';
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)'
        )
    })

    // readData();

    console.log('crud.db2', db);
    db.transaction(tx => {
        tx.executeSql('INSERT INTO items (text, count) values (?, ?)', ['gibberish', 0],
            (txObj, resultSet) => console.log('crud._array INTO', resultSet),
            (txObj, error) => console.log('Error', error))
    })

    // readData(db);

    db.transaction(tx => {
        tx.executeSql('UPDATE items SET count = 5 WHERE id = 1', null,
            (txObj,  _array ) => console.log('crud._array UPDATE', _array),
            (txObj, error) => console.log('Error ', error)
        )
    })

    // readData(db);

    db.transaction(tx => {
        tx.executeSql('DELETE FROM items WHERE id > 5 ', [],
            (txObj, _array) => console.log('crud._array READ', _array),
            (txObj, error) => console.log('Error ', error)
        )
    })


    db.transaction(tx => {
        // sending 4 arguments in executeSql
        tx.executeSql('SELECT * FROM items', null,
            (txObj, _array) => console.log('crud._array READ', _array),
            (txObj, error) => console.log('Error ', error)
        )
    });

    const readData = () => {
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql('SELECT * FROM items', null,
                (txObj, _array) => console.log('crud._array READ', _array),
                (txObj, error) => console.log('Error ', error)
            )
        });
    

    }
}





// creating a record

// read a record
// update a record
// delete a record