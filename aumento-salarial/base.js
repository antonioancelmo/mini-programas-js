var inSalario = document.getElementById("inSalario");
var brEstagiario = document.getElementById("brEstagiario")
var brTemporario = document.getElementById("brTemporario")
var brEfetivo = document.getElementById("brEfetivo")
var btCalcular = document.getElementById("btCalcular")
var btLimpar = document.getElementById("btLimpar")
var outResposta = document.getElementById("outResposta")

btCalcular.addEventListener("click", calcularSalario);

function calcularSalario () {
    var salario = Number(inSalario.value);
    var estagiario = brEstagiario.checked;
    var temporario = brTemporario.checked;
    var efetivo = brEfetivo.checked;
    var aumento = 0;


    if (salario == "" || (estagiario == false && temporario == false && efetivo == false))
    {
        alert("Por favor, preencha os campos vazios.");
        inSalario.focus();
        return;
    }
    if (salario == 0 || isNaN(salario)) {
        alert("Preencha os dados corretamente");
        inSalario.focus();
        return;
    }

    if (estagiario) {
        aumento = salario * 1.05;
        outResposta.textContent = "Seu novo salário é: " + aumento;
    }
    else if (temporario) {
        aumento = salario * 1.08;
        outResposta.textContent = "Seu novo salário é: " + aumento;
    }
    else  {
        aumento = salario * 1.15;
        outResposta.textContent = "Seu novo salário é: " + aumento;
    }

    btLimpar.addEventListener("click", limparCampos);

    function limparCampos () {
        inSalario.value = "";
        brEfetivo.checked = false;
        brEstagiario.checked = false;
        brTemporario.checked = false;
        outResposta.textContent = "";
        inSalario.focus();
    }
    

}