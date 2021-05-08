import { PRODUCTS_FROM_FILE } from "../../constants/productsJSON";
import { getSearchResult } from "./search";


describe('getSearchResult - return search result', () => {
    test('getSearchResult - testing ... ', () => {
        let products = PRODUCTS_FROM_FILE[0].result.list;

        let outdata = getSearchResult(products, 'U0036411 79104');
        console.log(outdata);
        expect(outdata).toBe(0);
    });
});
