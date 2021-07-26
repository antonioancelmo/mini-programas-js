var inNome = document.getElementById("inNome");
        var rbFeminino = document.getElementById("rbFeminino");
        var rbMasculino = document.getElementById("rbMasculino");
        var inAltura = document.getElementById("inAltura");
        var btCalcular = document.getElementById("btCalcular");
        var btLimpar = document.getElementById("btLimpar");
        var outResposta = document.getElementById("outResposta");

        btCalcular.addEventListener("click", calcularPeso)

        function calcularPeso () {
            var nome = inNome.value;
            var masculino = rbMasculino.checked;
            var feminino = rbFeminino.checked;
            var altura = Number(inAltura.value);

            if (nome == ""  || (masculino == false && feminino == false )) {
                alert("Por favor, informe o nome e/ou selecione o gênero!")
                inNome.focus();
                return;
            }
            if (altura == 0 || isNaN(altura)) {
               alert("Por favor, informe a altura corretamente...")
               inAltura.focus();
               return;
            }

            if (feminino) {
                var peso = 21 * Math.pow(altura, 2);
            }
            else {
                var peso = 22 * Math.pow(altura, 2)
            }

            outResposta.textContent = "Olá, " + nome + "! O peso ideal seria: " + peso.toFixed(2) + " kg." + " Mas lembre-se, o importante é você está saudável e feliz com seu corpo.";
        }

        btLimpar.addEventListener("click", limparCampos)
        
        function limparCampos () {
            inNome.value = "";
            rbMasculino.checked = false;
            rbFeminino.checked =  false;
            inAltura.value = "";
            outResposta.textContent = "";
            inNome.focus();
        }
