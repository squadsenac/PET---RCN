var nome=window.document.getElementById("nome")
var plu=window.document.getElementById("plu")
var setor=window.document.getElementById("setor")
var quantidade=window.document.getElementById("quantidade")
var unidade_Medida=window.document.getElementById("unidadeMedida")
var marca=window.document.getElementById("marca")
var fabricante=window.document.getElementById("fabricante")
var fornecedor=window.document.getElementById("fornecedor")
var precoCompra=window.document.getElementById("precoCompra")
var precoVenda=window.document.getElementById("precoVenda")
var descricao= window.document.getElementById("descricao")


Salvar=window.document.getElementById("salvar")
Salvar.addEventListener("click",salvar)

function salvar(){
const VarNome= nome.value
const VarPlu=plu.value
const Varsetor=setor.value
const Varquantidade=quantidade.value
const Varmarca=marca.value
const Varfabricante=fabricante.value
const Varfornecedor=fornecedor.value
const VarprecoCompra=precoCompra.value
const VarprecoVenda=precoVenda.value
const Vardescricao=descricao.value
console.log(VarNome,VarPlu,Varsetor,Varquantidade,Varmarca,Varfabricante,Varfornecedor,VarprecoCompra,VarprecoVenda,Vardescricao)


}