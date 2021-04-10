import clone from "clone";

// inputLeftButton - left button processing - decrease by percentage and round down
export const inputLeftButton = (value, step, minValue) => {
    // round down
    value = Math.floor(value - value * step / 100);
    value = roundNumber(value, false);
    (value < minValue) && (value = minValue);
    return value;

};

// inputMiddleButton - left button processing - decrease by percentage and round down
export const inputMiddleButton = (minValue, maxValue, minFlag) => {
    if (minFlag) {return(minValue)} else {return(maxValue)};
};

// inputRightButton - right button processing -  percentage increase and round up
export const inputRightButton = (value, step, maxValue) => {
    // percentage increase
    value = Math.ceil(value + value * step / 100);
    value = roundNumber(value, true);
    // +1 to add a percentage
    (value == 0) && (value++);
    //maximum control
    (value > maxValue) && (value = maxValue);
    return value;
};

// roundNumber - round number
// value - rounding number
// flag - if 'true' then round Up
// flag - if 'false' then round Down
const roundNumber = (value, flag) => {
    let valueLength = getNumLen(value);
    if (valueLength <= 3) { value = roundUpDown(value, 10, flag) }
    else if (valueLength == 4) { value = roundUpDown(value, 100, flag) }
    else { value = roundUpDown(value, 1000, flag) };
    return value;
}

// roundUpDown - round up/down to the comma
// value - rounding number
// rank - number of digits to round
// flag = true - round up
// flag = false - round down
const roundUpDown = (value, rank, flag) => {
    // round up
    if (flag) return Math.ceil(value / rank) * rank;
    // round down
    else return Math.floor(value / rank) * rank;

}

// getNumLen - get number length
const getNumLen = (num) => {
    num = num + '';
    return num.length;
};


// getDealerPriceRange - return min and max price for price filter
// products - products list. JSON-format
export const getDealerPriceRange = (products) => {
    // if array is empty
    if (products.length == 0) return ({ minDealerPrice: 0, maxDealerPrice: 0 })
    // initial value
    let minDealerPrice = Number(products[0].price_uah);
    let maxDealerPrice = Number(products[0].price_uah);
    let cur = 0;
    // find min price and max price 
    products.forEach(element => {
        cur = Number(element.price_uah);
        if (cur < minDealerPrice) minDealerPrice = cur;
        if (element.price_uah > maxDealerPrice) maxDealerPrice = cur;
    });
    minDealerPrice = roundUpDown(minDealerPrice, 1, false);
    maxDealerPrice = roundUpDown(maxDealerPrice, 1, true);
    return ({ minDealerPrice, maxDealerPrice });
}

// getFilteredProducts - return filtered list products
// productsList - products list
// minShowLimit - lower price limit
// maxShowLimit - uper price limit
export const getFilteredProducts = (productsList = [], minShowLimit, maxShowLimit) => {
    if (productsList === undefined) return productsList;
    let filteredProd = [];
    productsList.forEach(element => {
        if ((element.price_uah >= minShowLimit) && (element.price_uah <= maxShowLimit)) {
            filteredProd.push(element);
        }
    });
    return filteredProd;
}
