const express = require('express');
const router = express.Router();

const conexion = require('./database/db')
//MOSTRAR REGISTROS 
router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM canciones', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{results:results});
        }
    })
})

//AÑADIR REGISTROS
router.get('/create', (req,res)=>{
    res.render('create');
})

//EDITAR REGISTROS
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM canciones WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {canciones:results[0]});
        }        
    })
})
//ELIMINAR DATO
router.get('/delete/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM canciones WHERE id = ?', [id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }      
    })
});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;