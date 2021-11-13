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

/*----------- 2.- agregamos la función de DELETE en la BD -----------*/

async function deleteNovedad(id) {
    try {
        var query = "delete from novedades where id = ?";
        var rows = await pool.query(query,[id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

/*----------- 4.- Se hace un SELECT del id de la novedad para mostrar en los campos
y luego haga el UPDATE para modificarlos-----------*/
async function getNovedadById (id) {
    var query = "select * from novedades where id = ?"
    var rows = await pool.query(query,[id]);
    return rows[0];
}
/* --- 4.1.- UPDATE  */
async function updateNovedad (obj, id) {
    try {
        var query = "update novedade set ? where id = ?";
        var rows = await pool.query(query,[obj,id])
        return rows;
    } catch (error) {
        throw error;
    }
} 

module.exports= {getNovedades, setNovedades, deleteNovedad, getNovedadById, updateNovedad};