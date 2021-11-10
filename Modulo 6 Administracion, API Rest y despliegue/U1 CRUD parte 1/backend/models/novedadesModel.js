/* 2.- Se obtiene los datos de la tabla novedades de la BD */ 
var pool = require ('./bd');

async function getNovedades(){
    try {
        var query = 'select * from novedades';
        var rows = await pool.query(query);
        return rows;
        
    } catch (error) {
        console.log(error);
    }
}

/* 11.- insertarmos datos de novedades en la BD */ 
async function setNovedades(obj){
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports= {getNovedades,setNovedades};