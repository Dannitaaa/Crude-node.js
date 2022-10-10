const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'danae139',
    database: 'crud_node_db'
})


conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: '+error);
        return 
    }
    console.log('Conectado a la BD');
})

module.exports = conexion;