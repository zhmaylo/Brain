
import { URL_GET_CATEGORY } from '../constants/url';
import { middleWareFetch } from './middleWareFetch';



// getCategoryList - returns categorry list from server. JSON-format.
// dispatch - this is callback 

export const getCategoryList = async (sidAndTime, dispatch) => {

    let json = 0;
    // json = await fetchData(URL_GET_CATEGORY + sidAndTime);
    // console.log("getCategoryList. sidAndTime => ", sidAndTime)
    json = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
    // console.log("getCategoryList=>", json);
    (json.status == 1) && (dispatch({ type: 'CATEGORY_LIST', payload: json }));
    return json;
}


