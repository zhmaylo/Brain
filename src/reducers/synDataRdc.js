/////////////////////////////
//Start. SyncData section
//
// DB work log
export const  DB_LOG = 'DB_LOG';
// 
// Alert box show 
export const  ALERT_SHOW = 'ALERT_SHOW';
// 
//End. SyncData section
/////////////////////////////

// CRUD work log
export const syncDataRdc = (state = false, action) => {
    switch(action.type) {
        case DB_LOG:
            return {
                ...state,
                syncDataCrudLog:action.payload
            };
        case ALERT_SHOW:
            return {
                ...state,
                syncDataAlertShow:action.payload
            };
        default:
            return state;
    }
}




