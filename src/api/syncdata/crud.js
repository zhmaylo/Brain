/////////////////////////////
/////////////////////////////
//CRUD (local base)
/////////////////////////////

import * as SQLite from 'expo-sqlite';

//base initialization
export const createDB = () => {
    const db = SQLite.openDatabase('Brain.db');
    // console.log('crud.db', db);
    let rows='22222';
    // const text='12345';

    db.transaction(tx => {
        // sending 4 arguments in executeSql
        tx.executeSql('SELECT * FROM items', null, // passing sql query and parameters:null
          // success callback which sends two things Transaction object and ResultSet Object
          (txObj, { rows: { _array } }) => this.setState({ data: _array }) ;
          // failure callback which sends two things Transaction object and Error
          (txObj, error) => console.log('Error ', error)
          ) // end executeSQL
      }); // end transaction

}





// creating a record

// read a record
// update a record
// delete a record