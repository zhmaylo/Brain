
// inputLeftButton - left button processing - decrease by percentage and round down
export const inputLeftButton = (value, step, minValue) => {
    // round down
    value = Math.floor(value - value * step / 100);
    value = roundNumber(value, false);
    (value < minValue) && (value = minValue);
    return value;

};

// inputMiddleButton - left button processing - decrease by percentage and round down
export const inputMiddleButton = (value, minValue, maxValue, minFlag) => {
    minFlag ? value = minValue : value = maxValue;
    return value;

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
