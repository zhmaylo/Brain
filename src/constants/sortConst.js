/////////////////////////////
// Start. Section 'Sort'
//

import { SORT_PRICE_ASCEND, SORT_PRICE_DESCEND, 
        SORT_VENDOR_ASCEND, SORT_VENDOR_DESCEND, 
        SORT_WARRANTY_ASCEND, SORT_WARRANTY_DESCEND } from "../reducers/sortListProdRdc";

// header name 
export const SORT_HEADER_TITLE = 'Сортировка';
//
// an array of sort switches
export let SORT_SWITCHES_ARR = [
    {id: '0', sortNameItem : 'Цена по возростанию',          sortNameRdc: SORT_PRICE_ASCEND,        switchOn: false},
    {id: '1', sortNameItem : 'Цена по убыванию',             sortNameRdc: SORT_PRICE_DESCEND,       switchOn: true},
    {id: '2', sortNameItem : 'Изготовитель по возростанию',  sortNameRdc: SORT_VENDOR_ASCEND,       switchOn: false},
    {id: '3', sortNameItem : 'Изготовитель по убыванию',     sortNameRdc: SORT_VENDOR_DESCEND,      switchOn: false},
    {id: '4', sortNameItem : 'Срок гарантии по возростанию', sortNameRdc: SORT_WARRANTY_ASCEND,     switchOn: false},
    {id: '5', sortNameItem : 'Срок гарантии по убыванию',    sortNameRdc: SORT_WARRANTY_DESCEND,    switchOn: false},
];
//
// End. Section 'Sort'
/////////////////////////////
