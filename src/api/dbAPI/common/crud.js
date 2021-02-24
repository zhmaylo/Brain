/////////////////////////////
//CRUD (local base)
/////////////////////////////

export class crud {

    // tConnectToTable - connect(create if not exists) to table 
    // db - input dataBase
    // query - query create or join table
    // return resultSet - table reference
    // return error - error
    ConnectToTable(db, query) {
        console.log('CRUD.ConnectToTable => started');
        // console.log('CRUD.tConnect db => ', db);
        console.log('CRUD.ConnectToTable query => ', query);

        db.transaction(tx => {
            tx.executeSql(query, [],
                (txObj, resultTable) => {
                    console.log('CRUD.ConnectToTable - result', resultTable);
                    return resultTable;
                },
                (txObj, error) => {
                    console.log('CRUD.ConnectToTable - error', error);
                    return error;
                }
            )
            console.log('CRUD.ConnectToTable => finished');
        })
    }

    // tCreate - create one new row in table
    // db - input dataBase
    // query - table create query 
    // values - record field values
    // return - nothing
    tCreate(db, query, values) {
        console.log("CRUD.tCreate. values", values)
        db.transaction(tx => {
            // tx.executeSql('INSERT INTO brain_tbl (productID, product_code) values (?, ?)', ['gibberish', '0'],
            // tx.executeSql(query, [values.productID, values.product_code],
            tx.executeSql(query, values,
            // tx.executeSql(query, values,
                (txObj, resultSet) => console.log('crud.tCreate - result', resultSet),
                (txObj, error) => console.log('crud.tCreate - error', error))
        })
    }

    // tRead - Readind all Data from table
    // db - input dataBase
    tRead = (db) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM brain_tbl', null,
                (txObj, _array) => console.log('CRUD.tRead READ (length)', _array),
                (txObj, error) => console.log('Error ', error)
            )
        });
    }

    tDeleteAll = (db) => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM brain_tbl', [],
                (txObj, _array) => console.log('crud._array Zero Base', _array),
                (txObj, error) => console.log('Error ', error)
            )
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









// creating a record
// read a record
// update a record
// delete a record