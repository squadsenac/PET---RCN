var data_compra=window.document.getElementById("data")

var unidade_adq=window.document.getElementById("unidadesAdquiridas")

var preco_compra=window.document.getElementById("precoDeCompra")

var valor_total=window.document.getElementById("valorTotal")

var nome=window.document.getElementById("nome")

var plu=window.document.getElementById("PLU")
var setor=window.document.getElementById("setor")
var unidade_Medida=window.document.getElementById("UnidadeDeMedida")
var Salvar=window.document.getElementById("salvar")


const Valortotal=valor_total.value

Salvar.addEventListener("click",salvar)

function salvar(){
    const Valortotal=valor_total.value
    const VarDataCompra=data_compra.value
    const VarUnidade_adq=unidade_adq.value
    const Varpreco_compra=preco_compra.value
    const VarValorTotal=valor_total.value
    const VarNome=nome.value
    const Varplu=plu.value
    const Varsetor=setor.value
    const VarUnidadeMedida=unidade_Medida.value
    

    console.log(Valortotal,VarDataCompra,VarUnidade_adq,Varpreco_compra,VarValorTotal,VarNome,Varplu,Varsetor,VarUnidadeMedida)



 }
