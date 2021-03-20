import { crud } from '../common/crud';

//API for provider table



export class TBrain extends crud {

  // constructor(){};
  constructor(...args) {
    super(...args);
    //get provider table name
    this._BRAIN_TBL_NAME = super.T_PROV_NAME[0].tBrainTblName;
    // console.log('this._BRAIN_TBL=', this._BRAIN_TBL_NAME);
    this.ConnectToTable();
  }

  //tConnect - connect(create if not exists) to table provider 
  ConnectToTable() {
    // console.log('tProvider.ConnectToTable => started');
    const query =
      "CREATE TABLE IF NOT EXISTS "
      + this._BRAIN_TBL_NAME
      + " (id INTEGER PRIMARY KEY AUTOINCREMENT, productID TEXT, product_code TEXT, warranty TEXT, is_archive TEXT, is_exclusive TEXT, vendorID TEXT, articul TEXT, volume TEXT, weight TEXT, kbt TEXT, is_new TEXT, categoryID TEXT, EAN TEXT, name TEXT, brief_description TEXT, country TEXT, FOP INTEGER, price TEXT, price_uah TEXT, recommendable_price TEXT, retail_price_uah TEXT, prepayment_amount TEXT, bonus INTEGER, stocks TEXT, stocks_expected TEXT, available TEXT, small_image TEXT, medium_image TEXT, large_image TEXT, full_image TEXT, quantity_package_sale INTEGER)";
    // console.log('tProvider.tCreate. query => ', query);
    // console.log('tProvider.tCreate. this._BRAIN_TBL_NAME => ', this._BRAIN_TBL_NAME);
    super.ConnectToTable(query);
  };

  //tCreateRec - create one new record
  // values - contains all the values of one row of the table
  tCreate(values) {
    // console.log('tProvider.tCreateRec. => started');

    const query = 'INSERT INTO ' + this._BRAIN_TBL_NAME + ' (productID, product_code, warranty, is_archive, is_exclusive, vendorID, articul, volume, weight, kbt, is_new, categoryID, EAN, name, brief_description, country, FOP, price, price_uah, recommendable_price, retail_price_uah, prepayment_amount, bonus, stocks, stocks_expected, available, small_image, medium_image, large_image, full_image, quantity_package_sale) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // console.log("tBrain.tCreateRec values to string", String(values));
    // console.log("tCreateRec.tCreateRec. values.stocks_expected", String(JSON.stringify(values.stocks_expected)));
    // console.log("tCreateRec.tCreateRec. query", query);

    super.tCreate(query, [values.productID, values.product_code, values.warranty, values.is_archive, values.is_exclusive, values.vendorID, values.articul, values.volume, values.weight, values.kbt, values.is_new, values.categoryID, values.EAN, values.name, values.brief_description, values.country, values.FOP, values.price, values.price_uah, values.recommendable_price, values.retail_price_uah, values.prepayment_amount, values.bonus, JSON.stringify(values.stocks), JSON.stringify(values.stocks_expected), JSON.stringify(values.available), values.small_image, values.medium_image, values.large_image, values.full_image, values.quantity_package_sale]);

    // console.log('tProvider.tCreateRec. => finished');
  }

  // tRead - Data reading from table
  tRead() {
    const query = 'SELECT * FROM ' + this._BRAIN_TBL_NAME + ' WHERE product_code = ?';
    super.tRead();
  }

  // tReadAll - reading the entire table
  tReadAll() {
    const query = 'SELECT * FROM ' + this._BRAIN_TBL_NAME;
    super.tRead(query);
    return super.getCrudLog();;
  }

  // tDelete - deleting one line
  // Sample => values.product_code="U0087633" 
  tDelete(product_code) {
    const query = 'DELETE FROM ' + this._BRAIN_TBL_NAME + ' WHERE product_code = ?';
    let values = [];
    values[0] = product_code;
    super.tDelete(query, values);
  }

  // tDeleteAll - clearing the table
  tDeleteAll() {
    const query = 'DELETE FROM ' + this._BRAIN_TBL_NAME;
    super.tDelete(query);
    // console.log('tBrain.tDeleteAll finished'); 
  }

  // tDrop - deleting a table
  tDrop() {
    const query = 'DROP TABLE ' + this._BRAIN_TBL_NAME;
    super.tDrop(query);
  }

  // tReplace - replaycing an old record with a new one
  // 1. Deleting old entry. 2. Add a new record to the end of the table.
  // values - contains all the values of one row of the table
  async tReplace(values) {
    // console.log('tBrain.tReplace.values.product_code ', values.product_code);
    //Sample values.product_code="U0087633"
    this.tDelete(values.product_code);
    // this.tDelete("U0087633");
    this.tCreate(values);
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