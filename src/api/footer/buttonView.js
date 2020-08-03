// toggleViewProd - change view 1 or 2 collumn
// numCollumns - number collumn
export const buttonViewProd = (numCollumns) => {
    (numCollumns === 1) ? (numCollumns = 2) : numCollumns = 1;
    return numCollumns;
}