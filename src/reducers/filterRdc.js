/////////////////////////////
//Start. Filter section
//
// filter all 
export const  FILTER_ALL = 'FILTER_ALL';
// 
//End. Filter section
/////////////////////////////

//
export const filterAllRdc = (state = false, action) => {
    switch(action.type) {
        case FILTER_ALL:
            return {
                ...state,
                filterAll:action.payload
            };
        default:
            return state;
    }
}


