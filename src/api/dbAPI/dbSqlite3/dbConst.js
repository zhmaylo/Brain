
// constants for DB clasess
export class dbConst {

    constructor(...args) {
        // super(...args);

        // database object name 
        this._DB_PROD_NAME = './Product.db';

        // provider table name
        this._T_PROV_NAME = [{ tBrainTblName: './brain_tbl', tSlonTblName: './slon_tbl' }];
        // market table name
        this._T_MARK_NAME = [{ tPromTblName: './prom_tbl', tOlxTblName: './olx' }];

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

}