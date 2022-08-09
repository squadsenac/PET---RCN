let express = require('express');
let app = express();
var bodyParser = require('body-parser');  
let router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
const mysql = require('mysql2');
const rcn_app = require("../app");
app.use(express.urlencoded());

rcn_db = {
    getBycod: function(cod){
        connection.query(`SELECT * FROM produto WHERE cod = ${cod}`, function(err, rows, fields){
            if(!err){
                console.log('Resultado: ', rows);
            }else{
                console.log("Erro ao realizar a consulta.")
            }
        })
    },
    insert: function(nome, marca, qtd, setor, unid, preco_compra, preco_venda, resolve, reject){ 
                rcn_app.connection(function(err){
                        if(err){
                            reject(err);
                        }else{ 
                            console.log("Connectado");
                            var sql = `INSERT INTO produto(nome, marca, qtd, cod, unid, preco_compra, preco_venda)
                            VALUES ('${nome}', '${marca}', '${unid}', '${qtd}, ${cod}, ${preco_compra}, ${preco_venda}`;
                            connection.query(sql, function(err, rows, fields) {
                                    if(!err){
                                        resolve(nome, marca, qtd, setor, unid, preco_compra, preco_venda);
                                        console.log("Produto cadastrado com sucesso!");
                                    }else{
                                        console.log("Erro ao realizar o cadastro.")
                                    }

                                })
                        } 

                    })
    },
    update: function(){}, 
    delete: function(){}, 
};

module.exports = rcn_db;