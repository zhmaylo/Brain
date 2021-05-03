import { getData, storeData } from "../storage/storage";


// getValueStore - return value from storage. if value==null(undefined) then return valueDef
// key - value key 
// valueDef - value by default.
export const getValueStore = async (keyStore: string, valueDef? : string) => {
    if (valueDef=== undefined) valueDef='';
    let data = await getData(keyStore)
    if (data != null) return data;
    // set value by default
    await storeData(keyStore, valueDef);
    return valueDef;
};

// setValueStore - ApiKey from storage. Return 'true' if successful stored.
// key - value key 
// value - stored value
export const setValueStore = (keyStore: string, value: string) => {
    return storeData(keyStore, value);
}