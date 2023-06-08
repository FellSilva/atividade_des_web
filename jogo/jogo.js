var numeroAleatorio = 0;
var tentativas = 0;
var maxTentativas = 10;

function atualizarConfiguracoes() {
  var dificuldade = document.getElementById("dificuldade").value;

  if (dificuldade === "facil") {
    maxTentativas = 15;
  } else if (dificuldade === "medio") {
    maxTentativas = 10;
  } else if (dificuldade === "dificil") {
    maxTentativas = 5;
  }

  reiniciarJogo();
}

function reiniciarJogo() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("tentativas-restantes").innerHTML = maxTentativas;
}

function verificarNumero() {
  var numero = parseInt(document.getElementById("numero").value);

  if (isNaN(numero) || numero < 1 || numero > 100) {
    document.getElementById("resultado").innerHTML = "Por favor, digite um número válido entre 1 e 100.";
    return;
  }

  tentativas++;
  var tentativasRestantes = maxTentativas - tentativas;

  if (numero === numeroAleatorio) {
    document.getElementById("resultado").innerHTML = "Parabéns! Você acertou o número em " + tentativas + " tentativas.";
    reiniciarJogo();
  } else if (numero < numeroAleatorio) {
    document.getElementById("resultado").innerHTML = "Tente um número maior.";
  } else {
    document.getElementById("resultado").innerHTML = "Tente um número menor.";
  }

  document.getElementById("tentativas-restantes").innerHTML = tentativasRestantes;

  if (tentativas === maxTentativas) {
    document.getElementById("resultado").innerHTML = "Suas tentativas acabaram. O número correto era " + numeroAleatorio + ".";
    reiniciarJogo();
  }
}

reiniciarJogo();
