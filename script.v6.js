// principais loops while and for; selecionar vários elementos por um array e o que é um arrays
//coletar todos os elementos com a mesma classe
var rowPaciente    = document.getElementsByClassName('paciente');

for (var posicaoAtual = 0; posicaoAtual <= rowPaciente.length -1; posicaoAtual++) {

    var trPaciente  = rowPaciente[posicaoAtual];
    // o getElementsByClassName sempre traz um array de informações
    var tdNome      = trPaciente.getElementsByClassName('info-nome')[0];
    var tdPeso      = trPaciente.getElementsByClassName('info-peso')[0];
    var tdAltura    = trPaciente.getElementsByClassName('info-altura')[0];

    var paciente    = {nome : tdNome.textContent, peso : tdPeso.textContent, altura : tdAltura.textContent};

    if (paciente.altura != 0) {
        var imc = paciente.peso / (paciente.altura * paciente.altura);

        var tdImc = trPaciente.getElementsByClassName('info-imc')[0];;
        tdImc.textContent = imc.toFixed(2);

        console.log(imc);
    } else {
        console.log("Você, por menor que seja, não tem zero de altura :S")
    }
};
