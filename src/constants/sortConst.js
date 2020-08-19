/////////////////////////////
// Start. Section 'Sort'
//

import { SORT_PRICE_ASCEND, SORT_PRICE_DESCEND, 
        SORT_VENDOR_ASCEND, SORT_VENDOR_DESCEND, 
        SORT_WARRANTY_ASCEND, SORT_WARRANTY_DESCEND } from "../reducers/sortListProdRdc";

// header name 
export const SORT_HEADER_TITLE = 'Сортировка';
//
// array of sort name
export const SORT_NAME_ARR = [
    {sortNameItem : 'Цена по возростанию',          sortNameRdc: SORT_PRICE_ASCEND},
    {sortNameItem : 'Цена по убыванию',             sortNameRdc: SORT_PRICE_DESCEND},
    {sortNameItem : 'Изготовитель по возростанию',  sortNameRdc: SORT_VENDOR_ASCEND},
    {sortNameItem : 'Изготовитель по убыванию',     sortNameRdc: SORT_VENDOR_DESCEND},
    {sortNameItem : 'Срок гарантии по возростанию', sortNameRdc: SORT_WARRANTY_ASCEND},
    {sortNameItem : 'Срок гарантии по убыванию',    sortNameRdc: SORT_WARRANTY_DESCEND}
];
//
// End. Section 'Sort'
/////////////////////////////
