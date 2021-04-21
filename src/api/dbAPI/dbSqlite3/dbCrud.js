/////////////////////////////
//CRUD (local base)
/////////////////////////////

import { dbOpen } from './dbOpen';
import { dbConst } from './dbConst';



export class crud extends dbConst {
    constructor() {
        this.db = new dbOpen.open();
    }

    //_tQuery - query universal 
    _tQuery(query, values) {
        db.run(query, values, (error) => {
            console.log(error);
        })
        // console.log('CRUD(_tQuery) Finished');
    };


    // tConnectToTable - connect(create if not exists) to table 
    // query - query create or join table
    ConnectToTable(query) {
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
    tUpdate = (query, values = []) => {
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

