create database Base1;
use Base1;

create table estoque(
idEstoque int not null primary key auto_increment,
categoria varchar(45) not null,
data_cadastro date not null,
quantidade int not null
);
select * from  estoque;

create table RCN(
RCN_CNPJ varchar(14) primary key
);
select * from  RCN;

create table endereco(
idEndereco int primary key not null auto_increment,
numero int not null,
UF varchar(3) not null,
cep varchar(9) not null,
cidade varchar(45) not null,
rua varchar(45) not null,
RCN_RCN_CNPJ varchar(14)not null,
foreign key(RCN_RCN_CNPJ) references RCN(RCN_CNPJ)
);

create table cliente(
id_cliente int primary key not null auto_increment,
cpf varchar(14) not null,
nome varchar(45) not null,
telefone varchar(45),
endereco_cliente int not null,
foreign key(endereco_cliente) references endereco(idEndereco)
);

create table fornecedor(
idFornecedor int primary key not null auto_increment,
cnpj varchar(14)  not null,
nome varchar(45) not null,
endereco_fornecedor int not null,
foreign key(endereco_fornecedor) references  endereco(idEndereco)
);
 
create table vendedor(
idvendedor int primary key not null auto_increment,
cpf varchar(14)  not null,
nome varchar (45) not null,
status_empregado varchar(2) not null,
endereco_idendereco int not null,
foreign key (endereco_idendereco) references endereco(idEndereco)
);
 
create table compra(
idcompra int primary key not null auto_increment
);
 
create table item_de_compra(
idItemDeCompra int primary key not null auto_increment,
quantidade int not null,
Forma_Pag varchar(15) not null,
Data_hora datetime not null,
valor decimal(5,2) not null,
compra_id int not null,
foreign key(compra_id) references  compra(idcompra)
);

create table venda(
idVenda int primary key not null auto_increment,
RCN_RCN_CNPJ varchar(14) not null,
foreign key(RCN_RCN_CNPJ) references RCN(RCN_CNPJ)
);

create table produto(
idProduto int primary key not null auto_increment,
categoria varchar(45) not null,
preco decimal(5,2) not null,
nome varchar(45) not null,
quantidadeEstoque int not null,
idEstoque int not null,
idvendedor int not null,
foreign key(idEstoque) references estoque(idEstoque), 
foreign key(idvendedor) references vendedor(idvendedor)
);

create table itemDeVenda(
idItemDeVenda int primary key not null  auto_increment,
forma_de_pagamento varchar(25) not null,
quantidade int not null,
data_hora datetime not null,
valor decimal(5,2) not null,
venda_id_venda int not null,
foreign key(venda_id_venda) references venda(idVenda)

);