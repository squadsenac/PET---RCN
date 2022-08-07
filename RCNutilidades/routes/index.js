var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RCN Utilidades' });
});

router.get('/estoque/', function(req, res, next) {
  res.render('estoque', { title: 'RCN Utilidades - Estoque' });
});

router.get('/precos/', function(req, res, next) {
  res.render('precos', { title: 'RCN Utilidades - Estoque' });
});

router.get('/vendas/', function(req, res, next) {
  res.render('vendas', { title: 'RCN Utilidades - Estoque' });
});

router.get('/compras/', function(req, res, next) {
  res.render('compras', { title: 'RCN Utilidades - Estoque' });
});

router.get('/detalhes/', function(req, res, next) {
  res.render('detalhes', { title: 'RCN Utilidades - Estoque' });
});

router.get('/detalhes/detalhes_dados/', function(req, res, next) {
  res.render('detalhes_dados', { title: 'RCN Utilidades - Estoque' });
});

router.get('/detalhes/detalhes_header/', function(req, res, next) {
  res.render('detalhes_header', { title: 'RCN Utilidades - Estoque' });
});

router.get('/detalhes/detalhes_itens/', function(req, res, next) {
  res.render('detalhes_itens', { title: 'RCN Utilidades - Estoque' });
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

router.get('/precos/', function(req, res, next) {
  res.render('precos', { title: 'RCN Utilidades - Estoque' });
});

router.get('/usuarios/', function(req, res, next) {
  res.render('usuarios', { title: 'RCN Utilidades - Estoque' });
});

router.get('/vendas/', function(req, res, next) {
  res.render('vendas', { title: 'RCN Utilidades - Estoque' });
});

module.exports = router;
