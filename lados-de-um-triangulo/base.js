var inA = document.getElementById("inA");
var inB = document.getElementById("inB");
var inC = document.getElementById("inC");
var btVerificar = document.getElementById("btVerificar");
var outResultado = document.getElementById("outResultado");

btVerificar.addEventListener("click", verficarLados);

function verficarLados () {
    var a = Number(inA.value);
    var b = Number(inB.value);
    var c = Number(inC.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Informe o lado corretamente")
        inA.focus();
        return;
    }
    if (a == "" || b == "" || c == "") {
        alert("Preencha o espaço vazio.")
        inA.focus();
        return;
    }

    if (a==b && a == c ) {
        outResultado.textContent = "Equilátero";
    }
    else if (a == b || b==c || c==a) {
        outResultado.textContent = "Isósceles";
    }
    else {
        outResultado.textContent = "Escaleno";
    }
    
}