function calcularPesoIdeal() {
    var altura = parseFloat(document.getElementById("altura").value);
    var sexo = document.getElementById("sexo").value;
    var pesoIdeal = 0;

    if (sexo === "masculino") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "feminino") {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Seu peso ideal é de " + pesoIdeal.toFixed(2) + " kg.";
}
