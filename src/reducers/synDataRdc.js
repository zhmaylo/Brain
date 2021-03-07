/////////////////////////////
//Start. SyncData section
//
// CRUD work log
export const  CRUD_LOG = 'CRUD_LOG';
// 
//End. SyncData section
/////////////////////////////

// CRUD work log
export const syncDataRdc = (state = false, action) => {
    switch(action.type) {
        case CRUD_LOG:
            return {
                ...state,
                syncDataCrudLog:action.payload
            };
        default:
            return state;
    }
}


