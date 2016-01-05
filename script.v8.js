// a função recebe o argumento paciente, pois o mesmo encontra-se fora da função
// o recomendado é que cada função realize apenas uma ação

// como a função é uma propriedade do paciente, o ideal é que ela esteja dentro do objeto paciente
// o this é executado para funções que são chamadas a partir de um objeto
function calcImc(){

    if (this.altura != 0) {
        var imc = this.peso / (this.altura * this.altura);
        return imc;
    } else {
        console.log("Você, por menor que seja, não tem zero de altura :S")
    }
};

//coletar todos os elementos com a mesma classe
var rowPaciente    = document.getElementsByClassName('paciente');

for (var posicaoAtual = 0; posicaoAtual <= rowPaciente.length -1; posicaoAtual++) {

    var trPaciente  = rowPaciente[posicaoAtual];
    // o getElementsByClassName sempre traz um array de informações
    var tdNome      = trPaciente.getElementsByClassName('info-nome')[0];
    var tdPeso      = trPaciente.getElementsByClassName('info-peso')[0];
    var tdAltura    = trPaciente.getElementsByClassName('info-altura')[0];

    var pacienteAtual    = {
        nome : tdNome.textContent,
        peso : tdPeso.text Content,
        altura : tdAltura.textContent,
        getImc: calcImc
    };
    // é preciso declarar essa variável por conta do código abaixo que substitue o valor do conteúdo pelo valor do imc e a mesma é retornada dentro da função calcImc
    var imc = pacienteAtual.getImc();

    var tdImc = trPaciente.getElementsByClassName('info-imc')[0];;
        tdImc.textContent = imc.toFixed(2);

        console.log(imc);
};
