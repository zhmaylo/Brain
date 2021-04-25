import { Platform } from 'react-native';

/////////////////////////////
// Start. Section 'Proxy/no-proxy'
//
let proxy_url_pc, http;
//
// no proxy for smart/android
if  (Platform.OS === 'android') {proxy_url_pc = "", http="http"}
//
// proxy for PC Chrome if  (Platform.OS === 'web') 
// else {proxy_url_pc = "https://cors-anywhere.herokuapp.com/", http="https"};
else {proxy_url_pc = "", http="https"};
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
// ===========================
// URL get a list of categories
// GET
export const URL_GET_CATEGORY = HTTP + "://api.brain.com.ua/categories/";
// ===========================
// URL getting a list of products of a specified category and all its child categories
// Метод для получения списка товаров указанной категории и всех ее дочерних категорий
// GET
export const URL_GET_PRODUCTS = HTTP + "://api.brain.com.ua/products/";
// http://api.brain.com.ua/products/categoryID/SID [?vendorID=vendorID] [&search=search] 
// [&filterID=filterID] [&filters[]=filterID] [&limit=limit] [&offset=offset] 
// [&sortby=field_name] [&order=order] [&lang=lang]
// ==========================
// URL for obtaining the addresses of images for a specified product
// Метод для получения адресов картинок по указанному товару
// GET
export const URL_GET_PROD_IMG = HTTP + "://api.brain.com.ua/product_pictures/"; 
// http://api.brain.com.ua/product_pictures/productID/SID
// ==========================
// URL for getting the addresses of product images of the specified category and all its child categories
// Метод для получения адресов картинок товаров указанной категории и всех ее дочерних категорий
// GET
export const URL_GET_CAT_IMG = HTTP + "://api.brain.com.ua/products_pictures/"; 
// http://api.brain.com.ua/products_pictures/categoryID/SID [?vendorID=vendorID]
// [&search=search] [&filterID=filterID] [&filters[]=filterID] [&limit=limit]
// [&offset=offset] [&sortby=field_name] [&order=order] [&lang=lang]
// ==========================
// URL returns a link to the current price list in the specified format
// Метод возвращает ссылку на текущий прайслист в заданном формате
// GET
export const URL_GET_PRICE_LIST = HTTP + "://api.brain.com.ua/pricelists/"; 
// http://api.brain.com.ua/pricelists/targetID/format/SID [?lang=lang] [&full=full]
// targetID	- идентификатор пункта выдачи (обязательно)
// format -	да	формат прайслиста, возможные значения: xml, xlsx, xls, json, php (обязательно)
// SID -да идентификатор сессии (обязательно)
// lang	нет	язык, возможные значения - ru и ua, по умолчанию ru (не обязательно)
// full	нет	Наличие: по умолчанию 0. (не обязательно)
//      0 (только локальный склад, полный прайс);
//      1 (все наличие, полный прайс);
//      2 (все наличие, короткий прайс)
// ==========================
// URL returns a list of filters for each category with names ("name") 
// and unique tools ("filterID"), grouped by product characteristics
// Метод возвращает полный список фильтров для указанной категории с названиями ("name") 
// и уникальными идентификаторами ("filterID"), сгруппированных по характеристикам товаров
// GET
export const URL_GET_FILTER_ALL = HTTP + "://api.brain.com.ua/filters_all/"; 
//  http://api.brain.com.ua/filters_all/categoryID/SID [?lang=lang]
// ==========================
//
// End. Section 'URL for request'
/////////////////////////////


