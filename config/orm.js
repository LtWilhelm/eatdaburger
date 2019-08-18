let connection = require('./connection');

let orm = {
    selectWhere: function(table, column, value, callback){
        let queryString = 'select * from ?? where ?? = ?;';
        connection.query(queryString, [table, column, value], function (err, res) {
            if (err) throw err;

            callback(res);
        });
    },
    insertInto: function(table, dataObject){
        let queryString = 'insert into ?? (??) values (?)';
        connection.query(queryString, [table, dataObject.column, dataObject.value], function(err, res){
            if (err) throw err;

            console.log(res);
        });
    },
    updateWhere: function(table, columnToSet, valueToSet, column, value, callback){
        let queryString = 'update ?? set ?? = ? where ?? = ?';
        connection.query(queryString, [table, columnToSet, valueToSet, column, value], function(err, res){
            if (err) throw err;

            console.log(res);
        });
    },
    deleteWhere: function(table, column, value) {
        let queryString = 'delete from ?? where ?? = ?';
        connection.query(queryString, [table, column, value], function(err, res){
            if (err) throw err;

            console.log(res);
        })
    }
}

module.exports = orm;