

export class dbConst {

    constructor(...args) {
        // super(...args);

        // database object name 
        this.DB_PROD_NAME = 'Product.db';

        // provider table name
        this.T_PROV_NAME = ['brain_tbl','slon_tbl'];
        // market table name
        this.T_MARK_NAME = ['prom_tbl', 'olx', 'izi', 'rozetka'];
    }

    getDB_PROD_NAME() {
        return this.T_PROV_NAME;
    };
    
    getT_PROV_NAME() {
        return this.T_PROV_NAME;
    };

    getT_MARK_NAME() {
        return this.T_MARK_NAME
    };


}