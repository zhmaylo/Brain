
import tBrain from '../provider/tBrain';
jest.mock('../provider/tBrain');
// jest.setMock('../provider/tBrain');

describe('data base Brain provide', () => {
  // tBrain.ConnectToTable(); 
 
  // const globalDatabase = makeGlobalDatabase();
  
  beforeAll(() => {

    });
  });
  test('" ConnectToTable()" connect(create if not exists) to table provider. => ', () => {
    tBrain.tReadAll();
  });

// });


var sqlResult = { insertId: 1, rows: { _array: [] } };
const tx = { executeSql: jest.fn((query, sub=[], func=()=>true) => func({}, sqlResult)) };
const db = { transaction: jest.fn((func) => func(tx)) };
const rootStore = { db: db } };

describe('TransactionsStore', () => {
    const store = new TransactionsStore(rootStore);

    it('mocks sql', () => {
        expect(tx.executeSql.mock.calls.length).toBeGreaterThan(0);
    });
});