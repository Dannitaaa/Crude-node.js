const conexion = require('../database/db');


exports.save = (req,res)=>{
    const nombre = req.body.nombre;
    const artista = req.body.artista;
    conexion.query('INSERT INTO canciones SET ?',{nombre:nombre, cantante:artista}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })

};

exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const artista = req.body.artista;
    conexion.query('UPDATE canciones SET ? WHERE id = ?', [{nombre:nombre, cantante:artista}, id], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })

}