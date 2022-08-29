var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var rcn_db = require("./database");  
const app = require('../app');

/* Página Inicial */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'RCN Utilidades' });
});

//Estoque

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

//Detalhes do produto

router.get('/detalhes/:codProduto', function(req, res, next) {
  rcn_db.query('SELECT * FROM produto WHERE codProduto = ?', [req.params.codProduto], (err, rows) => {
    if (!err) {
      res.render('detalhes', { title: 'Detalhes do produto', produto: rows[0]});
    } else {
      console.log(err);
    }
    console.log('Dados da tabela de produtos: \n', rows);
  });
});

router.get('/detalhes/detalhes_dados/:codProduto', function(req, res, next) {

  rcn_db.query('SELECT * FROM produto WHERE codProduto = ?', [req.params.codProduto], (err, rows) => {
    if (!err) {
      res.render('detalhes_dados', { title: 'RCN Utilidades - Estoque', rows });
    } else {
      console.log(err);
    }
    console.log('Dados da tabela de produtos: \n', rows);
  });
  
});

/* router.get('/detalhes/detalhes_dados/', function(req, res, next) {

  rcn_db.query('SELECT * FROM produto', (err, rows) => {
    if (!err) {
      res.render('detalhes_dados', { title: 'RCN Utilidades - Estoque', rows });
    } else {
      console.log(err);
    }
    console.log('Dados da tabela de produtos: \n', rows);
  });
  
}); */

router.get('/detalhes/detalhes_itens/:codProduto', function(req, res, next) {
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

//Fornecedores, usuários do sistema e clientes (ainda em implementação)

router.get('/fornecedores/', function(req, res, next) {
  res.render('fornecedores', { title: 'RCN Utilidades - Estoque' });
});

router.get('/login/', function(req, res, next) {
  res.render('login', { title: 'RCN Utilidades - Estoque' });
});

router.get('/usuarios/', function(req, res, next) {
  res.render('usuarios', { title: 'RCN Utilidades - Estoque' });
});

router.get('/clientes/', function(req, res, next) {
  res.render('clientes', { title: 'RCN Utilidades - Estoque' });
});

//CRUD - Produtos

router.get('/cadastro_produto/', function(req, res, next) {
  res.render('cadastro_produto', { title: 'RCN Utilidades - Estoque' });
});

router.post('/criar_produto/', function(req, res, next) {
  var nome = req.body.nome;
  var marca = req.body.marca;
  var setor = req.body.setor;
  var preVend = req.body.prevenda;
  var preComp = req.body.precompra;
  var quant = req.body.quant;
  var sql = `INSERT INTO produto (codProduto, nome, marca, setor, preco_unid_compra, preco_unid_venda, quantidadeEstoque) VALUES 
  (NULL, "${nome}", "${marca}","${setor}","${preComp}","${preVend}","${quant}")`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Produto cadastrado com sucesso.");
          console.log(rows);
          res.redirect("/estoque/");
        } 
      
    });
});

router.get('/editar_produto/:codProduto', function(req, res, next) {
  var codigo = req.params.codProduto;
  var sql = `SELECT * FROM produto WHERE codProduto=${codigo}`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Dados carregados com sucesso.");
          console.log(rows);
          res.render('editar_produto', { title: 'RCN Utilidades - Estoque', produto: rows[0]});
        } 
      
    });
});

router.post('/editar_produto/edit/:codProduto', function(req, res, next) {
  var nome = req.body.nome;
  var marca = req.body.marca;
  var setor = req.body.setor;
  var preVend = req.body.prevenda;
  var preComp = req.body.precompra;
  var quant = req.body.quant;
  var codigo = req.params.codProduto;
  var sql = `UPDATE produto SET nome = "${nome}", marca = "${marca}", setor = "${setor}", preco_unid_compra = "${preComp}", preco_unid_venda= "${preVend}", quantidadeEstoque = "${quant}" WHERE
  codProduto = ${codigo}`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Produto atualizado com sucesso.");
          console.log(rows);
          res.redirect("/estoque/");
        } 
      
    });
});

router.get('/deletar_prod/:codProduto', function(req, res, next) {
  var codigo = req.params.codProduto;
  var sql = `DELETE FROM produto WHERE codProduto=${codigo}`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Produto removido com sucesso.");
          console.log(rows);
          res.redirect("/estoque/");
        } 
      
    });
});

//CRUD - Vendas

router.get('/buscar_produto/', function(req, res, next) {  
      res.render('buscar_produto', { title: 'RCN Utilidades - Estoque'});
});

router.post('/busca_de_produto/', function(req, res, next) {
  var nomeBusca = req.body.search;
  var sql = `SELECT * FROM produto WHERE nome LIKE "${nomeBusca}" OR marca LIKE "${nomeBusca}" OR codProduto LIKE "${nomeBusca}"`;
  //var sql = `SELECT * FROM produto WHERE codProduto = "${nomeBusca}"`;
  rcn_db.query(sql, function(err, rows){
    if(err){
      console.log(err);
      console.log("Tabela inválida. Tente novamente.");
    } else{
      console.log("Dados do produto obtidos com sucesso.");
      console.log(rows);
      if(nomeBusca){
        res.render('cadastro_venda', { title: 'RCN Utilidades - Estoque', produto: rows[0], busca:true});
      }else{
        res.render('cadastro_venda', { title: 'RCN Utilidades - Estoque', produto: rows[0], busca:false});
      }
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

router.get('/cadastro_venda/', function(req, res, next) {
  res.render('cadastro_venda', { title: 'RCN Utilidades - Estoque'});
});

router.post('/criar_venda/', function(req, res, next) {
  var nome = req.body.nome;
  var quant = req.body.quant;
  var codProd = req.body.codProduto;
  var formapag = req.body.formapag;
  var preVend = req.body.prevenda;
  var total = req.body.total;

  var sql = `INSERT INTO venda (codVenda, codProduto, nome, quantidadeVendida, Forma_Pag, preco_unid, total, Data_hora) VALUES 
  (NULL,"${codProd}", "${nome}", "${quant}","${formapag}","${preVend}","${total}", NOW()); UPDATE produto SET quantidadeEstoque = quantidadeEstoque - ${quant} 
  WHERE codProduto = "${codProd}"`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Produto cadastrado com sucesso.");
          console.log(rows);
          res.redirect("/vendas/");
        } 
      
    });
});

router.get('/editar_venda/:codVenda', function(req, res, next) {
  var codigo = req.params.codVenda;
  var sql = `SELECT * FROM venda WHERE codVenda="${codigo}"`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Dados carregados com sucesso.");
          console.log(rows);
          res.render('editar_vendas', { title: 'RCN Utilidades - Estoque', venda: rows[0]});
        } 
      
    });
});

router.post('/editar_venda/edit/:codVenda', function(req, res, next) {
  var nome = req.body.nome;
  var quantAtual = req.body.quant;
  var quantNova = req.body.quantNova;
  var quantAjust = quantNova - quantAtual;
  var formapag = req.body.formapag;
  var preVend = req.body.prevenda;
  var total = req.body.total;
  var codVenda = req.params.codVenda;
  var codProduto = req.params.codProduto;
  var sql = `UPDATE venda SET nome = "${nome}", quantidadeVendida= "${quant}", Forma_Pag = "${formapag}", preco_unid = "${preVend}", total = "${total}", Data_hora = NOW() WHERE
  codVenda = "${codVenda}"; UPDATE produto SET quantidadeEstoque = quantidadeEstoque + ${quantAjust} WHERE codProduto = "${codProduto}"`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Produto atualizado com sucesso.");
          console.log(rows);
          res.redirect("/vendas/");
        } 
      
    });

    /* rcn_db.query(sql_update, function(err, rows){
      if(err){
        console.log(err);
        console.log("Tabela inválida. Tente novamente.");
      } else{
        console.log("Produto atualizado com sucesso.");
        console.log(rows);
        res.redirect("/vendas/");
      } 
    
  }); */
});

router.get('/deletar_venda/:codVenda', function(req, res, next) {
  var codigo = req.params.codVenda;
  var sql = `DELETE FROM venda WHERE codVenda=${codigo}`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Produto removido com sucesso.");
          console.log(rows);
          res.redirect("/vendas/");
        } 
      
    });
});

//CRUD - Compras

router.post('/busca_de_produto_compras/', function(req, res, next) {
  var nomeBusca = req.body.search;
  var sql = `SELECT * FROM produto WHERE nome LIKE "${nomeBusca}" OR marca LIKE "${nomeBusca}" OR codProduto LIKE "${nomeBusca}"`;
  //var sql = `SELECT * FROM produto WHERE codProduto = "${nomeBusca}"`;
  rcn_db.query(sql, function(err, rows){
    if(err){
      console.log(err);
      console.log("Tabela inválida. Tente novamente.");
    } else{
      console.log("Dados do produto obtidos com sucesso.");
      console.log(rows);
      if(nomeBusca){
        res.render('cadastro_compra', { title: 'RCN Utilidades - Estoque', produto: rows[0], busca:true});
      }else{
        res.render('cadastro_compra', { title: 'RCN Utilidades - Estoque', produto: rows[0], busca:false});
      }
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
      res.render('compras', { title: 'RCN Utilidades - Estoque', compras: rows});
    }
  });  
});

router.get('/cadastro_compra/', function(req, res, next) {
  var sql = `SELECT * FROM produto`;
  rcn_db.query(sql, function(err, rows){
    if(err){
      console.log(err);
      console.log("Tabela inválida. Tente novamente.");
    } else{
      console.log("Dados de produtos obtidos com sucesso.");
      console.log(rows);
      res.render('cadastro_compra', { title: 'RCN Utilidades - Estoque', produto: rows});
    } 
  }); 
});

router.post('/criar_compra/', function(req, res, next) {
  var codProduto = req.body.codProduto;
  var nome = req.body.nome;
  var quant = req.body.quant;
  var forn = req.body.fornecedor;
  var formapag = req.body.formapag;
  var preComp = req.body.precompra;
  var total = req.body.total;

  var sql = `INSERT INTO compra (codCompra, codProd, nome, quantidadeComprada, fornecedor, Forma_Pag, preco_unid, total, Data_hora) VALUES 
  (NULL,${codProduto}, "${nome}", "${quant}","${forn}","${formapag}","${preComp}","${total}", NOW()); UPDATE produto SET quantidadeEstoque = quantidadeEstoque + ${quant} 
  WHERE codProduto = "${codProduto}"`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Produto cadastrado com sucesso.");
          console.log(rows);
          res.redirect("/compras/");
        } 
      
    });
});

router.get('/editar_compra/:codCompra', function(req, res, next) {
  var codigo = req.params.codCompra;
  var sql = `SELECT * FROM compra WHERE codCompra=${codigo};`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Dados carregados com sucesso.");
          console.log(rows);
          res.render('editar_compra', { title: 'RCN Utilidades - Estoque', compra: rows[0]});
        } 
      
    });
});

router.post('/editar_compra/edit/:codCompra', function(req, res, next) {
  var nome = req.body.nome;
  var quantAtual = req.body.quant;
  var quantNova = req.body.quantNova;
  var ajusteQuant = quantNova - quantAtual;
  var forn = req.body.fornecedor;
  var formapag = req.body.formapag;
  var preComp = req.body.precompra;
  var total = req.body.total;
  var codCompra = req.params.codCompra;
  var codProd = req.body.codProduto;

  var sql = `UPDATE compra SET nome = "${nome}", quantidadeComprada= "${quantNova}", fornecedor = "${forn}", Forma_Pag = "${formapag}", preco_unid = "${preComp}", total = "${total}", Data_hora = NOW() WHERE
  codCompra = ${codCompra}; UPDATE produto SET quantidadeEstoque = quantidadeEstoque + "${ajusteQuant}" WHERE codProduto = "${codProd}"`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Produto atualizado com sucesso.");
          console.log(rows);
          res.redirect("/compras/");
        } 
      
    });
});

router.get('/deletar_compra/:codCompra', function(req, res, next) {
  var codigo = req.params.codCompra;
  var sql = `DELETE FROM compra WHERE codCompra=${codigo}`;
      rcn_db.query(sql, function(err, rows){
        if(err){
          console.log(err);
          console.log("Tabela inválida. Tente novamente.");
        } else{
          console.log("Produto removido com sucesso.");
          console.log(rows);
          res.redirect("/compras/");
        } 
      
    });
});
module.exports = router;
