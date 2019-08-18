let orm = require('../config/orm');

let burgers = {
    create: function(value){
        orm.insertInto('burgers', {
            column: 'burger_name',
            value: value
        });
    },
    selectAll: function(column, value, callback) {
        orm.selectWhere('burgers', column, value, callback);
    },
    update: function(value, id){
        orm.updateWhere('burgers', 'devoured', value, 'id', id);
    },
    delete: function (id) {
        orm.deleteWhere('burgers', 'id', id);
    }
}