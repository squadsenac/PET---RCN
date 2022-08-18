let btnadd = document.getElementById("btn-add");
let lista_estoque = document.getElementById("lista_estoque");
let codprods = new Map();

class produto {
    constructor(nome, marca, qtd, setor, unid, preco_compra, preco_venda){
        this.nome = nome;
        this.marca = marca;
        this.qtd = qtd;
        this.setor = setor;
        this.unid = unid;
        this.preco_compra = preco_compra;
        this.preco_venda = preco_venda;
    }

    gerarCodigo(){
        let codigo = Math.floor(Math.random()*codprods.size);
        if (!codprods.has(codigo)){
            return codigo;
        }else{
            this.gerarCodigo();
        }  
    }
}

class venda extends produto{
    constructor(data, quantidade, valor_total){
        super(venda);
        this.data = data;
        this.quantidade = quantidade;
        this.valor_total = valor_total;
    }
}

function inserirProduto(nome, marca, qtd, setor, unid, preco_compra, preco_venda){

    let {nome} = new produto(nome, marca, qtd, setor, unid, preco_compra, preco_venda);
    let cod = {nome}.gerarCodigo();

    
    if(!codprods.has(produto.nome)){

        codprods.set(produto.nome, cod);

        let prod = document.createElement("tr");
        prod.innerHTML = `<th scope="row"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                          <td><a class="link-info" style="text-decoration:none;" href="/detalhes/" target="_self">${nome.nome}</a></td>
                          <td>${nome.marca}</td>
                          <td>${cod}</td>
                          <td>${nome.qtd}</td>
                          <td>${nome.setor}</td>
                          <td>${nome.unid}</td>
                          <td>-</td>`;
        document.lista_estoque.appendChild(prod);

    }else{
        console.log("Produto existente. Insira outro ou mude o nome.")
    }
   
}

export{
    inserirProduto,
    produto,
    venda,
    codprods
}