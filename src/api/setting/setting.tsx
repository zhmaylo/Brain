import { getData, storeData } from "../storage/storage";


// getValueStore - return value from storage. if value==null(undefined) then return valueDef
// key - value key 
// valueDef - value by default.
export const getValueStore = (key: string, valueDef: string) => {
    let apiKey = getData(key).then((data) => {
        if (data == null) return valueDef;
        // set value by default
        storeData(key, valueDef);
        return valueDef;
    });
    return apiKey;
};

// setValueStore - ApiKey from storage. Return 'true' if successful stored.
// key - value key 
// value - stored value
export const setValueStore = (key : string, value: string) => {
    return storeData(key, value);
}