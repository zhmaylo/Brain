// db.js
import connect, {sql} from '@databases/sqlite';

export {sql};

const db = connect('./data');
export default db;