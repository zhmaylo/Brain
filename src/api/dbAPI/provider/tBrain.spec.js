
// jest.enableAutomock();

jest.mock('crud');
jest.mock('expo-sqlite');
import dbConnect from '../common/dbConnect';
jest.mock('../common/dbConnect');
import { TBrain } from  './tBrain';

// const sqlite3 = require('sqlite3').verbose();

// const tBrain = new TBrain();

// let db;
beforeAll(async () => {
    dbConnect.mockClear();
    // db = await new sqlite3.Database(':memory:');
});

describe('Testing open/close', () => {
    test(' db close in memory ', async () => {
        console.log('🚀 ~ file: dbOpen.spec.js ~ line 14 ~ test ~ db', db);
        // tBrain.tConnectToTable();
    })
})          

afterAll(() => {
    db.close();
});
