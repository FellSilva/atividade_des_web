function calcularCusto() {
    var largura = parseFloat(document.getElementById("largura").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var area = largura * comprimento;
    var custo = area * 36;
    var resultado = document.getElementById("resultado");
  
    resultado.innerHTML = "A área a ser revestida é de " + area.toFixed(2) + " metros quadrados.";
    resultado.innerHTML += "<br>O custo total para revestir com piso é de R$" + custo.toFixed(2);
  }
  