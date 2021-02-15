/////////////////////////////
//CRUD (local base)
/////////////////////////////

// import { tNameProvider } from './provider/tProviderConst';

export class crud {

    // constructor(...args){
    //     this.args=args;
    // }

    //tCreate - create new table if odl
    tCreate(db = null, query = null) {
        console.log('CRUD.tCreate => started');
        // console.log('CRUD.tCreate db => ', db);
        console.log('CRUD.tCreate query => ', query);

        if (db == null || query == null) { return false };
        db.transaction(tx => {
            tx.executeSql(query, [],
            (txObj, resultSet) => console.log('crud.tCreate - result', resultSet),
            (txObj, error) => console.log('crud.tCreate - error', error))

        })
        console.log('CRUD.tCreate => finished');
    }

    // tAdd - add row to table
    tAdd (db, id = null, data = null) {
        // if ((id == null) || (data == null)) return false;

        db.transaction(tx => {
            tx.executeSql('INSERT INTO items (text, count) values (?, ?)', ['gibberish', 0],
                (txObj, resultSet) => console.log('crud._array INTO', resultSet),
                (txObj, error) => console.log('Error', error))
        })
    }

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