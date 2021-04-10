/////////////////////////////
//Start. SyncData section
//
// DB work log
export const  DB_LOG = 'DB_LOG';
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
        default:
            return state;
    }
}



