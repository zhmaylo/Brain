export const toggleViewProd = (numCollumns) => {
    (numCollumns === 1) ? (numCollumns = 2) : numCollumns = 1;
    return numCollumns;
}