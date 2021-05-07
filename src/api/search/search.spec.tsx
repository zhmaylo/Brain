import { PRODUCTS_FROM_FILE } from "../../constants/productsJSON";
import { getSearchResult } from "./search";


describe('getSearchResult - return search result', () => {
    test('getSearchResult - testing ... ', () => {
        let products = PRODUCTS_FROM_FILE;
        let outdata = getSearchResult(products, 'й + 7 (903)-123-45-67- ,. q wErt й цу кЕн A ბ ㄱ');
        console.log(outdata);
        expect(outdata).toBe(0);
    });
});
