/////////////////////////////
// Start. Section 'Proxy/no-proxy'
//
// no proxy for smart/android
// export const PROXY_URL_PC = "";
// const http = 'http';
// proxy for PC Chrome
export const PROXY_URL_PC = "https://cors-anywhere.herokuapp.com/";
const http = 'https';
//
// End. Section 'Proxy/no-proxy'
/////////////////////////////


/////////////////////////////
// Start. Section 'URL for request'
//
// URL get authorization
// POST
export const URL_POST_AUTH = http + '://api.brain.com.ua/auth';
//
// URL get a list of categories
// GET
export const URL_GET_CATEGORY = http + "://api.brain.com.ua/categories/";
//
// URL getting a list of products of a specified category and all its child categories
// Метод для получения списка товаров указанной категории и всех ее дочерних категорий
// GET
// http://api.brain.com.ua/products/categoryID/SID [?vendorID=vendorID] [&search=search] 
// [&filterID=filterID] [&filters[]=filterID] [&limit=limit] [&offset=offset] 
// [&sortby=field_name] [&order=order] [&lang=lang]
export const URL_GET_LIST_PRODUCT = http + "://api.brain.com.ua/";
// 
// End. Section 'URL for request'
/////////////////////////////

