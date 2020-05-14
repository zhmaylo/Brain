
import { URL_GET_CATEGORY } from '../constants/url';
import { fetchData } from './fetchData';


// getCategoryList - returns categorry list from server. JSON-format.
// dispatch - this is callback 
// dispatch = null - default value for test
export const getCategoryList = async (sid, dispatch = null) => {

    let json = 0;
    json = await fetchData(URL_GET_CATEGORY + sid);
    // console.log("getCategoryList=>", json);
    if ((dispatch !== null) && (json.status == 1)) {
        dispatch({ type: 'CATEGORY_LIST', payload: json });
    }
    return json;
}


