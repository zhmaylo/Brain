/////////////////////////////
//CRUD (local base)
/////////////////////////////

import { dbProduct } from './dbProduct';
import { dbConst } from './dbConst';

// let _dbProd;

export class crud extends dbConst {
    constructor(...args) {
        super(...args);
        this._dbProd = new dbProduct();
        // console.log("class CRUD. constructor - finished");
    }

    //_tQuery - query universal 
    _tQuery (query, values, logResult, logError) {
        this._dbProd.transaction(tx => {
            tx.executeSql(query, values,
                (txObj, resultTable) => console.log(logResult, resultTable),
                (txObj, error) => console.log(logError, error))
        })
    }

    // tConnectToTable - connect(create if not exists) to table 
    // query - query create or join table
    ConnectToTable(query) {
        // console.log('CRUD.ConnectToTable query => ', query);
        // console.log('CRUD.ConnectToTable super.logResult => ', super.logResult[0].tConnect);
        // this._tQuery(query, [], 'CRUD.ConnectToTable - result', 'CRUD.ConnectToTable - error');

        this._tQuery(query, [], super.DEV_LOG[0].tConnectResult, super.DEV_LOG[0].tConnectError);
    }

    // tCreate - create one new row in table
    // query - table create request 
    // values - variable values in the request 
    tCreate(query, values) {
        // console.log("CRUD.tCreate. values", values)
        this._tQuery(query, values, super.DEV_LOG[0].tCreateResult, super.DEV_LOG[0].tCreateError);
    }

    // tRead - Data reading from table
    // query - data read request 
    // values - variable values in the request 
    tRead(query, values = []) {
        this._tQuery(query, values, super.DEV_LOG[0].tReadResult, super.DEV_LOG[0].tReadError);
    }

    // updateData - updating a row from Data base 
    // query - data update request
    // values - variable values in the request 
    tUpdate = (query, values = []) => {
        this._tQuery(query, values, super.DEV_LOG[0].tUpdateResult, super.DEV_LOG[0].tUpdateError);
    }

    // tDelete - Data deleting from table
    // query - data delete request
    // values - variable values in the request 
    tDelete(query, values = []) {
        this._tQuery(query, values, super.DEV_LOG[0].tDeleteResult, super.DEV_LOG[0].tDeleteError);
    }

    // tDrop - Drop table from data base
    // query - table delete request
    tDrop(query) {
        this._tQuery(query, [], super.DEV_LOG[0].tDropResult, super.DEV_LOG[0].tDropError);
      }

    //
    getLenghtTbl(){
        this._tQuery(query, [], super.DEV_LOG[0].tDropResult, super.DEV_LOG[0].tDropError);
        // SELECT COUNT(*) FROM имя таблицы WHERE  условие

    }
}

