import { LOGIN, LOGIN_ERROR, PASSWORD, PASS_MD5, SPINER_TOGGLE } from "../../constants/actionConst";
import { LOGIN_DEFAULT, PASS_MD5_DEFAULT, setLogin, setPassMD5 } from "../../constants/authorizConst";
import { ERRORS_RESPONSE } from "../../constants/errorConst";
import { LOGIN_ADMIN, PASS_ADMIN } from "../../constants/authorizConst";
import { getSid } from "../sid/sid"
import { getData, storeData } from "../storage/storage";
let md5 = require("md5");

// setAutoriz - login or password record to state 
//              and create user authorization data (authorizConst.tsx)
//
export const setAutoriz = async (dispatch: any, dispatchType: any, value: string) => {
    dispatch({ type: SPINER_TOGGLE, payload: true });
    dispatch({ type: dispatchType, payload: value });
    if (dispatchType == LOGIN) {
        setLogin(value);
    };
    if (dispatchType == PASSWORD) {
        let pass_md5 = md5(value);
        dispatch({ type: PASS_MD5, payload: pass_md5 });
        setPassMD5(pass_md5);
    };
    adminEnter(dispatch, dispatchType, value);
    let outData = await checkSID(dispatch);
    dispatch({ type: SPINER_TOGGLE, payload: false });
    return outData;
};

// dev stub
// adminEnter - set admin pass/login
const adminEnter = (dispatch: any, dispatchType: any, value: string) => {

    if ((dispatchType == LOGIN) && (value.toLowerCase() == LOGIN_ADMIN)) {
        dispatch({ type: LOGIN, payload: LOGIN_DEFAULT })
        setLogin(LOGIN_DEFAULT);
    };

    if ((dispatchType == PASSWORD) && (value == PASS_ADMIN)) {
        dispatch({ type: PASS_MD5, payload: PASS_MD5_DEFAULT });
        setPassMD5(PASS_MD5_DEFAULT);
    };
}

// checkSID - login and password verification 
// return - false - login or password is not correct
// return - true - login or password is correct
const checkSID = async (dispatch: any) => {
    let sid = await getSid(dispatch);
    if (sid.sid === undefined) {
        dispatch({ type: LOGIN_ERROR, payload: ERRORS_RESPONSE[7] });
        return false;
    }
    dispatch({ type: LOGIN_ERROR, payload: ERRORS_RESPONSE[0] });
    return true;
}

// getValueStore - return value from storage. if value==null(undefined) then return valueDef
// key - value key 
export const getValueStore = async (keyStore: string) => {
    let data = await getData(keyStore)
    if (data != null) return data;
    return '';
};

// setValueStore - ApiKey from storage. Return 'true' if successful stored.
// key - value key 
// value - stored value
export const setValueStore = (keyStore: string, value: string) => {
    return storeData(keyStore, value);
}
