
// constants for DB clasess
export class dbConst {

    constructor(...args) {
        // super(...args);

        // database object name 
        this._DB_PROD_NAME = 'Product.db';

        // provider table name
        this._T_PROV_NAME = [{ tBrainTblName: 'brain_tbl', tSlonTblName: 'slon_tbl' }];
        // market table name
        this._T_MARK_NAME = [{ tPromTblName: 'prom_tbl', tOlxTblName: 'olx' }];

        ////////////////////////////////
        // Start. Developer section. Console logs
        this._DEV_LOG = [{
            tConnectResult: 'CRUD.ConnectToTable - result',
            tConnectError: 'CRUD.ConnectToTable - error',

            tCreateResult: 'CRUD.Create Record - result',
            tCreateError: 'CRUD.Create Record - error',

            tReadResult: 'CRUD.Read from table - result',
            tReadError: 'CRUD.Read from table - error',

            tUpdateResult: 'CRUD.Update record - result',
            tUpdateError: 'CRUD.Update record - error',

            tDeleteResult: 'CRUD.Delete from table - result',
            tDeleteError: 'CRUD.Delete from table - error',

            tDropResult: 'CRUD.Drop table - result',
            tDropError: 'CRUD.Drop table - error',

            nLenghtTable: ' \n=> LenghtTable=', 
            nRowsAffectedAdd: ' \n=> RowsAffected(Add) =',

            nInsertId: '\n=> InsertId=',
            code: 'code',

            space: ' ',

        }];
        // End. Developer section. Console logs
        ////////////////////////////////


    };

    get DB_PROD_NAME() {
        return this._DB_PROD_NAME;
    };

    get T_PROV_NAME() {
        return this._T_PROV_NAME;
    };

    get T_MARK_NAME() {
        return this._T_MARK_NAME;
    };

    get DEV_LOG() {
        return this._DEV_LOG;
    };

}