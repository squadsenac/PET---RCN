let express = require('express');
let app = express();
var bodyParser = require('body-parser');  
let router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
const mysql = require('mysql2');
const produtos = require("./produtos");
const rcn_app = require("../app");
app.use(express.urlencoded());

rcn_db = {
    getById: function(id){
    },
    insert: rcn_app.connection(function(err){
       if(err) throw err;
       console.log("Connectado");
       var sql = `INSERT INTO usuario(id, nome, cpf, endereco)
       VALUES ('1234342', 'Joe', '2123343', 'Rua das Beba 171)`;
       connection.query(sql, function(err, rows, fields) {
            if(!err){
                console.log("Usuário cadastrado com sucesso!");
            }else{
                console.log("Erro ao realizar o cadastro.")
            }
        })

    }) 
};




connection.query('SELECT * FROM usuario', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
    }else{
        console.log("Erro ao realizar a consulta.")
    }
})

router.post('/db/', urlencodedParser,function(req, res, next){

    res.status(201).send(req.body);
    
});

module.exports = rcn_db;