import { crud } from '../common/crud';
import { PRODUCTS_FROM_FILE } from './../../../constants/productsJSON';

//API for provider table

export class TBrain extends crud {

  // constructor(){};
  // constructor(...args) {
  //     super(...args);
  //   }

  //tConnect - connect(create if not exists) to table provider 
  ConnectToTable(db, tProvName = '') {
    console.log('tProvider.ConnectToTable => started');
    const query =
      "CREATE TABLE IF NOT EXISTS "
      + tProvName
      + " (id INTEGER PRIMARY KEY AUTOINCREMENT, productID TEXT, product_code TEXT, warranty TEXT, is_archive TEXT, is_exclusive TEXT, vendorID TEXT, articul TEXT, volume TEXT, weight TEXT, kbt TEXT, is_new TEXT, categoryID TEXT, EAN TEXT, name TEXT, brief_description TEXT, country TEXT, FOP INTEGER, price TEXT, price_uah TEXT, recommendable_price TEXT, retail_price_uah TEXT, prepayment_amount TEXT, bonus INTEGER, stocks BLOB, stocks_expected BLOB, available BLOB, small_image TEXT, medium_image TEXT, large_image TEXT, full_image TEXT, quantity_package_sale INTEGER)";

    // console.log('tProvider.tCreate. db => ', db);
    // console.log('tProvider.tCreate. query => ', query);
    const tName = super.ConnectToTable(db, query);
    console.log('tProvider.tCreate => finished');
    return tName;
  };

  //tCreateRec - create a new record in table
  tCreateRec(db, tProvName, values) {
    console.log('tProvider.tCreateRec. => started');
    // const query = 'INSERT INTO ' + tProvName + ' (productID, product_code) values (?, ?)';
    // const query = 'INSERT INTO ' + tProvName + ' (productID, product_code, warranty, is_archive, is_exclusive, vendorID, articul, volume, weight, kbt, is_new, categoryID, EAN, name, brief_description, country, FOP, price, price_uah, recommendable_price, retail_price_uah, prepayment_amount, bonus, stocks, stocks_expected, available, small_image, medium_image, large_image, full_image, quantity_package_sale) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const query = 'INSERT INTO ' + tProvName + ' (productID, product_code, stocks_expected) values (?, ?, ?)';
    console.log("tBrain.tCreateRec values to string", String(values))
    // console.log("tCreateRec.tCreateRec. values", values);
    console.log("tCreateRec.tCreateRec. query", query);
    super.tCreate(db, query, [values.productID, values.product_code, values.stocks_expected]);
    console.log('tProvider.tCreateRec. => finished');
  }

  tRead(db) {
    super.tRead(db);
  }

  tDeleteAll(db) {
    super.tDeleteAll(db)
  }
}

//обнуление локальной базы

//полная загрузка всех товаров которые есть в наличии

//выгрузка данных в локальный файл

//выгрузка данных в облако

/*
{
    "productID": "82067",
    "product_code": "U0041071",
    "warranty": "36",
    "is_archive": "0",
    "is_exclusive": "0",
    "vendorID": "34",
    "articul": "SP120GBSS3S55S25",
    "volume": "0",
    "weight": "0.1",
    "kbt": "0",
    "is_new": "0",
    "categoryID": "1235",
    "EAN": "4712702629149",
    "name": "Накопитель SSD 2.5\" 120GB Silicon Power (SP120GBSS3S55S25)",
    "brief_description": "внутренний, S55, Тип флеш-памяти - TLC, SATA 6Gb/s, 520 Mb/s, 460 Mb/s, 1м. ч.",
    "country": "Тайвань",
    "FOP": 0,
    "price": "19.85",
    "price_uah": "549.00",
    "recommendable_price": "0.00",
    "retail_price_uah": "559.00",
    "prepayment_amount": "0",
    "bonus": 0,
    "stocks": [
      1
    ],
    "stocks_expected": {
      "19": "2020-07-24 09:00:00",
      "29": "2020-07-22 15:00:00",
      "42": "2020-07-22 14:30:00",
      "58": "2020-07-22 14:30:00",
      "73": "2020-07-23 14:00:00",
      "94": "2020-07-22 16:30:00",
      "121": "2020-07-22 18:00:00",
      "144": "2020-07-22 17:30:00",
      "168": "2020-07-22 16:30:00",
      "172": "2020-07-22 14:00:00",
      "225": "2020-07-22 16:00:00",
      "245": "2020-07-22 15:15:00",
      "258": "2020-07-23 10:30:00",
      "259": "2020-07-22 17:00:00",
      "1001": "2020-07-21 19:00:00",
      "1002": "2020-07-21 20:00:00"
    },
    "available": {
      "1": 3
    },
    "small_image": "http://opt.brain.com.ua/static/images/prod_img/7/1/U0041071_small.jpg",
    "medium_image": "http://opt.brain.com.ua/static/images/prod_img/7/1/U0041071.jpg",
    "large_image": "http://opt.brain.com.ua/static/images/prod_img/7/1/U0041071_big.jpg",
    "full_image": "http://brain.com.ua/static/common/images/no-photo-api.png",
    "quantity_package_sale": 0
  },
  */