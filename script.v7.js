//coletar todos os elementos com a mesma classe
var rowPaciente    = document.getElementsByClassName('paciente');

// a função recebe o argumento paciente, pois o mesmo encontra-se fora da função
// o recomendado é que cada função tenha apenas uma ação
function calcImc (paciente){

    if (paciente.altura != 0) {
        var imc = paciente.peso / (paciente.altura * paciente.altura);
        return imc;
    } else {
        console.log("Você, por menor que seja, não tem zero de altura :S")
    }
};

for (var posicaoAtual = 0; posicaoAtual <= rowPaciente.length -1; posicaoAtual++) {

    var trPaciente  = rowPaciente[posicaoAtual];
    // o getElementsByClassName sempre traz um array de informações
    var tdNome      = trPaciente.getElementsByClassName('info-nome')[0];
    var tdPeso      = trPaciente.getElementsByClassName('info-peso')[0];
    var tdAltura    = trPaciente.getElementsByClassName('info-altura')[0];

    var pacienteAtual    = {nome : tdNome.textContent, peso : tdPeso.textContent, altura : tdAltura.textContent};

    // é preciso declarar essa variável por conta do código abaixo que substitue o valor do conteúdo pelo valor do imc
    var imc = calcImc(pacienteAtual);

    var tdImc = trPaciente.getElementsByClassName('info-imc')[0];;
        tdImc.textContent = imc.toFixed(2);

        console.log(imc);
};
