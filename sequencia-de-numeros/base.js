var inNumero = document.getElementById("inNumero");
var btDecrescer = document.getElementById("btDecrescer");
var btCrescer = document.getElementById("btCrescer");
var outResposta = document.getElementById("outResposta");

btDecrescer.addEventListener("click", exibirResposta)

function exibirResposta () {
    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido!")
        inNumero.focus();
        return;
    }

    var resposta = "Entre " + numero + " e 1: ";
    for (var i = numero; i > 0; i--) {
        resposta = resposta + i + ", "
    }
    outResposta.textContent = resposta;
}

btCrescer.addEventListener("click", listaCrescente) 

function listaCrescente () {
    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido!")
        inNumero.focus();
        return;
    }

    var resposta = "Entre " + numero + " e 1: ";
    for (var i = numero; i > 0; i++) {
        resposta = resposta + i + ", "
    }
    outResposta.textContent = resposta;

    outResposta.textContent = i;

}