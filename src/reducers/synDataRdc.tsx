import { DB_LOG } from "../constants/actionConst";

// Synchronization data reducers
//
// CRUD work log
export const syncDataRdc = (state = [], action: any) => {
    switch (action.type) {
        case DB_LOG:
            return {
                ...state,
                syncDataCrudLog: action.payload
            };
        default:
            return state;
    }
}



