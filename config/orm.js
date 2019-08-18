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
    updateWhere: function(table, columnToSet, valueToSet, column, value){
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
    },
    select: function(table, callback) {
        let queryString = 'select * from ??';
        connection.query(queryString, table, function(err, res){
            if (err) throw err;
            
            callback(res);
        });
    }
}

module.exports = orm;