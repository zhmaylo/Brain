
// getSearchResult - return search result
// products - products list
// request - search string
export const getSearchResult = (products: any, request: string) => {
    
    return getSearchRegExp(request);
};

// getSearchRegExp - return search regular expression
const getSearchRegExp = (request: string) => {
        let searchRegExp : any;
        // let regExp = new RegExp('\p{L}','i');
        
        searchRegExp = request.match(/[a-zа-я0-9]+/gui);
        let regExp = new RegExp(searchRegExp,'/i');
        let outReg = regExp.test('wErt')
        return outReg;
}

