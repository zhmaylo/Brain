import { PRODUCTS_FROM_FILE } from "../../constants/productsJSON";
import { getSearchResult } from "./search";


describe('getSearchResult - return search result', () => {
    test('getSearchResult - testing ... ', () => {
        let products = PRODUCTS_FROM_FILE[0].result.list;

        let outdata = getSearchResult(products, 'U0036411 79104');
        console.log(outdata[0]);
        expect(outdata[0].product_code).toBe('U0036411');
    });
});
