let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function () {
    console.log('connected to database with ID ' + connection.threadId);
})

module.exports = connection;