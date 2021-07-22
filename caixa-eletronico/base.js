var inSaque = document.getElementById("inSaque");
        var btExibir = document.getElementById("btExibir");
        var outDuzentos = document.getElementById("outDuzentos");
        var outCinqueta = document.getElementById("outCinqueta");
        var outVinte = document.getElementById("outVinte");
        var outCinco = document.getElementById("outCinco");

        btExibir.addEventListener("click", exibirNotas);

        function exibirNotas () {
            var saque = Number(inSaque.value);

        if (saque == "" || isNaN(saque)) {
            alert("Por favor, informe o valor corretamente!")
            inSaque.focus()
            return;
        }
        if(saque%5 !=0) {
            alert("Valor inválido para as notas disponíveis");  
            inSaque.focus();
            return;
        }

        var notasDuzentos = Math.floor(saque/200);
        var resto1 = saque%200
        var notasCinquenta = Math.floor(resto1/50);
        var resto2= resto1%50
        var notasVinte = Math.floor(resto2/20);
        var resto3 = resto2%20
        var notasCinco = Math.floor(resto3/5);

        if (notasDuzentos > 0) {
            outDuzentos.textContent = "Notas de R$ 200: " + notasDuzentos;
        }
        if(notasCinquenta>0){
    
        outCinqueta.textContent= "Notas de R$ 50 : " + notasCinquenta;            
        }
            
        if(notasVinte>0){
            outVinte.textContent= "Notas de R$ 20 : " + notasVinte;
        }
            
        if(notasCinco>0){
            
           outCinco.textContent = "Notas de R$ 5 : " + notasCinco;

        }
        
        inSaque.addEventListener("click", limparCampos)
        
        function limparCampos (){
            outDuzentos.textContent = "";
            outCinqueta.textContent = "";
            outVinte.textContent = "";
            outCinco.textContent = "";
        }

    }