
import { URL_GET_AUTH } from '../constants/url';
import { USER_AUTH } from '../constants/authoriz';
import { fetchData } from './fetchData';


// getSid - returns session SID
// dispatch - this is callback 
// dispatch = null - default value for test
export const getSid = async (dispatch = null) => {
    let requestHeader = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: USER_AUTH
    };
    let json = 0;
    json = await fetchData(URL_GET_AUTH, requestHeader);
    // console.log("getSid=>", json);
    if ( (dispatch !== null) && (json.status == 1)) {
        dispatch({ type: 'SESSION_SID', payload: json });
    }
    return json;    
}


// // addTimeStampToSid - add time stamp to sid
// // sid - sid of session
// const addTimeStampToSid = (sid) => {

// }


