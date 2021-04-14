// db.spec.js

jest.setMock('../db', require('./db.mock'));
import db, {sql} from './db';

test('createUser', async () => {
  await createUser('Joe Blogs', 'joe.blogs@example.com');
  expect(await db.query(sql`SELECT name, email FROM users`)).toEqual([
    {name: 'Joe Blogs', email: 'joe.blogs@example.com'},
  ]);
});