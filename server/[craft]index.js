import rethinkdb from 'rethinkdb';

const connection = await rethinkdb.connect({
    host: 'localhost',
    port: 28015,
    db: 'test',
  });

// Chèn một bản ghi mới
await rethinkdb.table('users').insert({
    username: 'ducduc',
    email: 'ducduc@gmail.com',
  }).run(connection);

// Lấy tất cả bản ghi từ table 'users'
const result = await rethinkdb.table('users').run(connection);

// Lặp qua các bản ghi và in ra thông tin
await result.eachAsync((row) => {
  console.log(row);
});

// Đóng kết nối sau khi thực hiện các truy vấn
connection.close();
