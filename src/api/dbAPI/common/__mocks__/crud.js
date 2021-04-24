/////////////////////////////
//CRUD __mocks__ (memory base)
/////////////////////////////

// import { dbConnect } from './dbConnect';
// import { dbConst } from './dbConst';
const sqlite3 = require('sqlite3').verbose();


export class crud  {
    constructor() {
        
        this._dbProd = new sqlite3.Database(':memory:');
        this._crudLog = 'Database opened \n';
        // console.log("class CRUD. constructor - finished");
    }

    //_tQuery - query universal 
    _tQuery(query, values) {
        // console.log('_tQuery.values', values )
        // this._dbProd.transaction(tx => {
        this._dbProd.run(query, values,
            (err) => {
                console.log(err);
            }
        )
    }
    // console.log('CRUD(_tQuery) Finished');



// tConnectToTable - connect(create if not exists) to table 
// query - query create or join table
ConnectToTable(query) {
    // console.log('CRUD.ConnectToTable query => ', query);
    // console.log('CRUD.ConnectToTable super.logResult => ', super.logResult[0].tConnect);
    // this._tQuery(query, [], 'CRUD.ConnectToTable - result', 'CRUD.ConnectToTable - error');

    this._tQuery(query, []);
}

// tCreate - create one new row in table
// query - table create request 
// values - variable values in the request 
tCreate(query, values) {
    // console.log("CRUD.tCreate. values", values)
    this._tQuery(query, values);
}

// tRead - Data reading from table
// query - data read request 
// values - variable values in the request 
tRead(query, values = []) {
    this._tQuery(query, values);
}

// updateData - updating a row from Data base 
// query - data update request
// values - variable values in the request 
tUpdate (query, values = []) {
    this._tQuery(query, values);
}

// tDelete - Data deleting from table
// query - data delete request
// values - variable values in the request 
tDelete(query, values = []) {
    // console.log('tDelete.values', values);
    this._tQuery(query, values);
    // console.log('tDelete.this._tQuery - finished');
}

// tDrop - Drop table from data base
// query - table delete request
tDrop(query) {
    this._tQuery(query, []);
}

// getCrudLog - getter for this._crudLog
getCrudLog() {
    let mes = this._crudLog;
    this.setCrudLog('');
    return mes;
}

// setCrudLog - setter for this._crudLog
setCrudLog(mes) {
    this._crudLog = mes;
}

}

