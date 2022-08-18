var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var rcn_db = require("./database");  
const app = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'RCN Utilidades' });
});

router.get('/estoque/', function(req, res, next) {
    var sql = `SELECT * FROM produto`;
    rcn_db.query(sql, function(err, rows){
      if(err){
        console.log(err);
        console.log("Tabela inválida. Tente novamente.");
      } else{
        console.log("Dados de produtos obtidos com sucesso.");
        console.log(rows);
        res.render('estoque', { title: 'RCN Utilidades - Estoque', produtos: rows});
      } 
    });  
  });

router.get('/vendas/', function(req, res, next) {
  var sql = `SELECT * FROM venda`;
  rcn_db.query(sql, function(err, rows){
    if(err){
      console.log(err);
      console.log("Tabela inválida. Tente novamente.");
    } else{
      console.log("Dados de vendas obtidos com sucesso.");
      console.log(rows);
      res.render('vendas', { title: 'RCN Utilidades - Estoque', vendas: rows});
    } 
  });  
 
});

router.get('/compras/', function(req, res, next) {
  var sql = `SELECT * FROM compra`;
  rcn_db.query(sql, function(err, rows){
    if(err){
      console.log(err);
      console.log("Tabela inválida. Tente novamente.");
    } else{
      console.log("Dados de compras obtidos com sucesso.");
      console.log(rows);
      res.render('vendas', { title: 'RCN Utilidades - Estoque', compras: rows});
    }
  });  
});

router.get('/detalhes/', function(req, res, next) {
  res.render('detalhes', { title: 'RCN Utilidades - Estoque' });
});

router.get('/detalhes/detalhes_dados/:codProduto', function(req, res, next) {

  connection.query('SELECT * FROM user WHERE codProduto = ?', [req.params.codProduto], (err, rows) => {
    if (!err) {
      res.render('detalhes_dados', { title: 'RCN Utilidades - Estoque', rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
  
});

router.get('/detalhes/detalhes_header/', function(req, res, next) {
  res.render('detalhes_header', { title: 'RCN Utilidades - Estoque' });
});

router.get('/detalhes/detalhes_itens/', function(req, res, next) {
  var sql = `SELECT * FROM produto`;
  rcn_db.query(sql, function(err, rows){
    if(err){
      console.log(err);
      console.log("Tabela inválida. Tente novamente.");
    } else{
      console.log("Dados de produtos obtidos com sucesso.");
      console.log(rows);
      res.render('detalhes_itens', { title: 'RCN Utilidades - Estoque', nomeProds: rows});
    } 
  });  
  
});

router.get('/detalhes/detalhes_transacoes/', function(req, res, next) {
  res.render('detalhes_transacoes', { title: 'RCN Utilidades - Estoque' });
});

router.get('/fornecedores/', function(req, res, next) {
  res.render('fornecedores', { title: 'RCN Utilidades - Estoque' });
});

router.get('/login/', function(req, res, next) {
  res.render('login', { title: 'RCN Utilidades - Estoque' });
});

router.get('/usuarios/', function(req, res, next) {
  res.render('usuarios', { title: 'RCN Utilidades - Estoque' });
});

router.get('/vendas/', function(req, res, next) {
  res.render('vendas', { title: 'RCN Utilidades - Estoque' });
});

router.post('/db/', urlencodedParser,function(req, res, next){


  
});

module.exports = router;
