function calcularConsumo() {
    var distancia = parseFloat(document.getElementById("distancia").value);
    var valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value);
    var consumo = distancia / 8;
    var custo = consumo * valorCombustivel;
    var resultado = document.getElementById("resultado");
  
    resultado.innerHTML = "O consumo do carro é de aproximadamente " + consumo.toFixed(2) + " litros por km.";
    resultado.innerHTML += "<br>O custo total da viagem é de R$" + custo.toFixed(2);
  }
  