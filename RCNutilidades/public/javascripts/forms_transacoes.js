var preVenda = document.getElementById("precoDeVenda").value;
var valorTotalVenda = document.getElementById("valorTotal").value;
var unidVendidas = document.getElementById("unidadesVendidas").value;

function calcularTotal(){
    valorTotalVenda = unidVendidas * preVenda; 
};

