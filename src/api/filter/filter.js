
// inputLeftButton - left button processing - decrease by percentage and round down
export const inputLeftButton = (value, step, minValue) => {
    // round down
    value = Math.floor(value - value*step/100);
    (value < minValue) && (value = minValue);
    return value;

}
// inputMiddleButton - value reset
// export const inputMiddleButton = (value) => {
//     return value;
// }

// inputRightButton - right button processing -  percentage increase and round up
export const inputRightButton = (value, step, maxValue) => {
    // round up
    value = Math.ceil(value + value*step/100);
    if (value>10) {value = Math.ceil(value/10)*10};
    if ((value>10) && (value<=99)) {value = Math.ceil(value/10)*10};
    if ((value>=100) && (value<999)) {value = Math.ceil(value/10)*10};
    if ((value>=1000) && (value<9999)) {value = Math.ceil(value/100)*100};
    if ((value>=10000) && (value<99999)) {value = Math.ceil(value/1000)*1000};
    if ((value>=100000) && (value<999999)) {value = Math.ceil(value/10000)*10000};

    (value == 0) && (value++); 

    (value > maxValue) && (value = maxValue);
    return value;
}