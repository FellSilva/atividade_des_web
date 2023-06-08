function exibirNumerosPares() {
    var input = document.getElementById("input");
    var valor = parseInt(input.value);

    if (!isNaN(valor) && valor >= 1) {
        var numerosPares = [];
        var somaTotal = 0;

        for (var i = 2; i <= valor; i += 2) {
            numerosPares.push(i);
            somaTotal += i;
        }

        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Números pares: " + numerosPares.join(", ") + "<br/>" +
            "Soma total: " + somaTotal;
    } else {
        alert("Por favor, informe um número válido maior ou igual a 1.");
    }
}
