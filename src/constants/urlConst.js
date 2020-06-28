import { Platform } from 'react-native';

/////////////////////////////
// Start. Section 'Proxy/no-proxy'
//
let proxy_url_pc, http;
//
// no proxy for smart/android
if  (Platform.OS === 'android') {proxy_url_pc = "", http="http"};
//
// proxy for PC Chrome
if  (Platform.OS === 'web') {proxy_url_pc = "https://cors-anywhere.herokuapp.com/", http="https"};
//
export const PROXY_URL_PC = proxy_url_pc;
const HTTP = http;
//
// End. Section 'Proxy/no-proxy'
/////////////////////////////


/////////////////////////////
// Start. Section 'URL for request'
//
// URL get authorization
// POST
export const URL_POST_AUTH = HTTP + '://api.brain.com.ua/auth';
//
// URL get a list of categories
// GET
export const URL_GET_CATEGORY = HTTP + "://api.brain.com.ua/categories/";
//
// URL getting a list of products of a specified category and all its child categories
// Метод для получения списка товаров указанной категории и всех ее дочерних категорий
// GET
// http://api.brain.com.ua/products/categoryID/SID [?vendorID=vendorID] [&search=search] 
// [&filterID=filterID] [&filters[]=filterID] [&limit=limit] [&offset=offset] 
// [&sortby=field_name] [&order=order] [&lang=lang]
export const URL_GET_LIST_PRODUCT = HTTP + "://api.brain.com.ua/";
// 
// End. Section 'URL for request'
/////////////////////////////

