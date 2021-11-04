/*  ------7. creamos este archivo el cual se conecta a la BD y creamos las funciones
que necesitemos (SELECT-INSERT-UPDATE-DELETE)
------- */

var pool = require ('./bd');
var m5d = require('md5');

async function getUserByUsernameAndPassword(user,password){
    try {
        var query = 'select * from usuarios where usuario= ? and password= ? limit 1';
        var rows = await pool.query(query, [user, m5d(password)]);
        return rows[0];
        
    } catch (error) {
        console.log(error);
    }
}

module.exports= {getUserByUsernameAndPassword};