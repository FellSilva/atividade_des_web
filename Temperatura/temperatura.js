function converterTemperatura() {
    var temperatura = document.getElementById("temp").value;
    var resultado = document.getElementById("resultado");


    if (isNaN(temperatura)) {
        resultado.innerHTML = "Digite um Valor númerico válido";
        return;
    }


    var fahrenheit = parseFloat(temperatura) * 9 / 5 + 32;
    var celsius = (parseFloat(temperatura) - 32) * 5 / 9;


    resultado.innerHTML = temperatura + " - Celsius equivale a " + fahrenheit.toFixed(2) + " - Fahrenheit <br>"
        + temperatura + " - Fahrenheite equivale a " + celsius.toFixed(2) + "0 - Celsius.";
}