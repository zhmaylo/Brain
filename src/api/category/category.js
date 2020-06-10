
import { URL_GET_CATEGORY } from '../../constants/urlConst';
import { middleWareFetch } from './../fetch/middleWareFetch';
import { categoryFromFile } from './../../constants/categoryJSON';



// getCategoryList - returns categorry list from server. JSON-format.
// dispatch - this is callback 

export const getCategoryList = async (sidAndTime, dispatch) => {

    let json = 0;
    // console.log("getCategoryList. sidAndTime => ", sidAndTime)
    json = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
    console.log("getCategoryList=>", json);
    (json.status == 1) && (dispatch({ type: 'CATEGORY_LIST', payload: json }));
    return json;
}

export const getMainCategory = () => {
    let arrFilt = categoryFromFile.filter (item => item.parentID == 1);
    return arrFilt;

}

export const getUpCategory = () => {

}

export const getDownCategory = () => {

}
