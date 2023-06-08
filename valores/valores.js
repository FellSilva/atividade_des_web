var valores = [];

function adicionarValor() {
    var valor = parseFloat(document.getElementById("valor").value);
    valores.push(valor);
    document.getElementById("valor").value = "";
}

function mostrarValores() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Valores inseridos: " + valores.join(", ");
}

function mostrarMaiorValor() {
    var maiorValor = Math.max(...valores);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Maior valor: " + maiorValor;
}

function mostrarMenorValor() {
    var menorValor = Math.min(...valores);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Menor valor: " + menorValor;
}
