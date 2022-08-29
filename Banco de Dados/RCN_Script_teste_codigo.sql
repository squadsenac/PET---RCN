create table produto(
codProduto int primary key not null auto_increment,
nome varchar(45) not null,
marca varchar(45) not null,
setor varchar(45) not null,
preco_unid_compra decimal(5,2) not null,
preco_unid_venda decimal(5,2) not null,
quantidadeEstoque int not null
);

create table compra(
codCompra int primary key not null auto_increment,
codProd int not null,
nome varchar(45) not null,
quantidadeComprada int not null,
fornecedor varchar(15) not null,
Forma_Pag varchar(15) not null,
preco_unid decimal(5,2) not null,
total decimal(5,2) not null,
Data_hora datetime not null
);

create table venda(
codVenda int primary key not null auto_increment,
codProduto int not null,
nome varchar(45) not null,
quantidadeVendida int not null,
Forma_Pag varchar(15) not null,
preco_unid decimal(5,2) not null,
total decimal(5,2) not null,
Data_hora datetime not null
);

ALTER TABLE compra ADD FOREIGN KEY (codProd) REFERENCES produto(codProduto);

ALTER TABLE compra ADD FOREIGN KEY (preco_unid) REFERENCES produto(preco_unid_compra);

ALTER TABLE venda ADD FOREIGN KEY (codProduto) REFERENCES produto(codProduto);

ALTER TABLE venda ADD FOREIGN KEY (preco_unid_venda) REFERENCES produto(preco_unid_venda);

ALTER TABLE produto DROP index preco_unid_venda;

ALTER TABLE venda DROP INDEX preco_unid_venda;

DROP TABLE produto;

DROP TABLE compra;

DROP TABLE venda;

INSERT INTO `produto` 
(`codProduto`, `nome`,  `marca`,    `setor`,                 `preco_unid_compra`,         `preco_unid_venda`, `quantidadeEstoque`) VALUES
(NULL, 'Panela',      'Mondial',        'uten_dom',        '100', '150', 5),
(NULL, 'Batedeira',      'Wallita',        'uten_dom',        '80', '160', 7),
(NULL, 'Toalha',      'Finlandek',        'banho',        '70', '140', 3);

 UPDATE produto SET produto.quantidadeEstoque = produto.quantidadeEstoque + 3 WHERE produto.cod;

INSERT INTO `venda` 
(`codVenda`, `codProduto`, `nome`,  `quantidadeVendida`, `Forma_Pag`,`preco_unid`, `total`, `Data_hora`) VALUES
(NULL, 1, 'Panela',      '5',        'cartao',        '100', '150', NOW());

