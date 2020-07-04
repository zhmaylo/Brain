
import { URL_GET_CATEGORY } from '../../constants/urlConst';
import { middleWareFetch } from './../fetch/middleWareFetch';


// getCategoryList - returns categorry list from server. JSON-format.
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const getCategoryList = async (sidAndTime, dispatch) => {

    // console.log("getCategoryList. sidAndTime => ", sidAndTime)
    let json = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
    json = json.result;
    json = sortListbyName(json);
    // console.log("getCategoryList=>", json);


    return json;
}

// sortListByName - sorts the list by "name"
// json - sort list
export const sortListbyName = (json) => {
    return json = json.sort((a, b) => {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //сортируем строки по возрастанию
            return -1
        if (nameA > nameB)
            return 1
        return 0 // Никакой сортировки
    })
};

// addFieldChildren - creates a new array and add to him "categoryJSON"  with field "isChildren".
//                    Returns a new array.
// categoryJSON - full list category in format JSON
export const addFieldChildren = (categoryJSON) => {
    let arrListaddField = [];
    let itemList = {
        categoryID: 0, parentID: 0,
        isChildren: undefined, //field which add
        realcat: 0, name: ""
    };
    // console.log("addFieldChildren.categoryJSON", categoryJSON);

    // if (typeof categoryJSON === 'undefined') { return [] };

    categoryJSON.forEach(function (item, index, array) {
        itemList.categoryID = item.categoryID;
        itemList.parentID = item.parentID;
        itemList.realcat = item.realcat;
        itemList.name = item.name;
        arrListaddField[index] = { ...itemList };
    })

    // console.log("arrListaddField", arrListaddField[0]);
    return arrListaddField;
}




