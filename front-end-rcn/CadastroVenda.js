var data=window.document.getElementById("data")

var unidade_adq=window.document.getElementById("unidadesAdquiridas")

var preco_venda=window.document.getElementById("PreçoDeVenda")

var valor_total=window.document.getElementById("ValorTotal")

var nome=window.document.getElementById("nome")

var plu=window.document.getElementById("PLU")
var setor=window.document.getElementById("setor")
var unidade_Medida=window.document.getElementById("UnidadeDeMedida")
var Salvar=window.document.getElementById("salvar")


const Valortotal=valor_total.value

Salvar.addEventListener("click",salvar)

function salvar(){
    const Valortotal=valor_total.value
    const VarData=data.value
    const VarUnidade_adq=unidade_adq.value
    const Varpreco_venda=preco_venda.value
    const VarValorTotal=valor_total.value
    const VarNome=nome.value
    const Varplu=plu.value
    const Varsetor=setor.value
    const VarUnidadeMedida=unidade_Medida.value
    

    console.log(Valortotal,VarData,VarUnidade_adq,Varpreco_venda,VarValorTotal,VarNome,Varplu,Varsetor,VarUnidadeMedida)



 }