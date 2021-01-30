var mysql      = require('mysql');

// 1. 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456789',
  database : 'itcast'
});

// 2. 连接数据库 打开冰箱门
connection.connect();

// 3. 执行数据操作 把大象放进冰箱
connection.query('insert into users values(null, "admin", "123456")', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
}); 


connection.query('select * from `users`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// 关闭连接 关闭冰箱门
connection.end();