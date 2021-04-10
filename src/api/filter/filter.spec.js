import { getFilteredProducts, getDealerPriceRange, inputLeftButton, inputMiddleButton, inputRightButton } from "./filter";

describe('inputLeftButton', () => {
    test('"inputLeftButton - return number rounded down', () => {
        outdata = inputLeftButton(24, 10, 1);
        expect(outdata).toBe(20);
    });

    test('"inputLeftButton - return minimum range value ', () => {
        outdata = inputLeftButton(5, 10, 15);
        expect(outdata).toBe(15);
    });
});

describe('inputMiddleButton', () => {
    test('"inputMiddleButton - return minimum range value ', () => {
        outdata = inputMiddleButton(5, 50, true);
        expect(outdata).toBe(5);
    });

    test('"inputMiddleButton - return maximum range value ', () => {
        outdata = inputMiddleButton(5, 50, false);
        expect(outdata).toBe(50);
    });
});

describe('inputRightButton', () => {
    test('"inputRightButton - return number rounded up', () => {
        outdata = inputRightButton(5, 10, 50);
        expect(outdata).toBe(10);
    });

    test('"inputRightButton - return maximum range value ', () => {
        outdata = inputRightButton(50, 10, 50);
        expect(outdata).toBe(50);
    });
    test('"inputRightButton - test: value=0 ', () => {
        outdata = inputRightButton(0, 10, 500000);
        expect(outdata).toBe(1);
    });
    test('"inputRightButton - test: rank=4 ', () => {
        outdata = inputRightButton(5000, 10, 500000);
        expect(outdata).toBe(5500);
    });
    test('"inputRightButton - test: rank=5 ', () => {
        outdata = inputRightButton(50000, 10, 500000);
        expect(outdata).toBe(55000);
    });
});

describe('getDealerPriceRange', () => {
    test('"getDealerPriceRange - testing min/max Dealer Price + round ', () => {
        let products = [
            { "price_uah": "3.00" }, { "price_uah": "2.00" }, { "price_uah": "6.01" },
            { "price_uah": "0.99" }, { "price_uah": "1.00" }, { "price_uah": "2.99" },
        ]
        outdata = getDealerPriceRange(products);
        expect(outdata.maxDealerPrice).toBe(7);
        expect(outdata.minDealerPrice).toBe(0);
    });
    test('"getDealerPriceRange - products.length =0 ', () => {
        let products2 = [];
        outdata = getDealerPriceRange(products2);
        expect(outdata.maxDealerPrice).toBe(0);
        expect(outdata.minDealerPrice).toBe(0);
    });
});

describe('getFilteredProducts', () => {
    test('"getFilteredProducts - testing return filtered list products ', () => {
        let inProducts = [
            { "price_uah": "3.00" }, { "price_uah": "2.00" }, { "price_uah": "6.01" },
            { "price_uah": "0.99" }, { "price_uah": "1.00" }, { "price_uah": "2.99" },
        ]
        let outProducts = [
            { "price_uah": "3.00" }, { "price_uah": "2.00" },
            { "price_uah": "1.00" }, { "price_uah": "2.99" },
        ]
        outdata = getFilteredProducts(inProducts, 1, 3);
        expect(outdata).toStrictEqual(outProducts);
        expect(outdata).toEqual(outProducts);
    });
    test('"getFilteredProducts - testing "products list = 0" ', () => {
        let inProducts = [];
        let outProducts = [];
        outdata = getFilteredProducts(inProducts, 1, 3);
        expect(outdata).toStrictEqual(outProducts);
        expect(outdata).toEqual(outProducts);
    });
    test('"getFilteredProducts - testing "products list = undefined" ', () => {
        let inProducts = undefined;
        let outProducts = [];
        outdata = getFilteredProducts(inProducts, 1, 3);
        expect(outdata).toStrictEqual(outProducts);
        expect(outdata).toEqual(outProducts);
    });
});

