import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'testdb',
});

connection.query('SELECT * FROM Student', (err, results, fields) => {
  console.log(results);
});
