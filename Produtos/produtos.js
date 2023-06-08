function calcularTotal() {
    var produtos = []
    for (var i = 1; i <= 3; i++) {
        var produto = document.getElementById("produto" + i).value;
        var quantidade = parseInt(document.getElementById("quantidade" + i).value);
        var valor = parseFloat(document.getElementById("valor" + i).value);
        produtos.push({ produto: produto, quantidade: quantidade, valor: valor });
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (var i = 0; i < produtos.length; i++) {
        var total = produtos[i].quantidade * produtos[i].valor;
        resultado.innerHTML += produtos[i].produto + " total das vendas: R$" + total.toFixed(2) + "<br>";
    }
}