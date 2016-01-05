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
        peso : tdPeso.textContent,
        altura : tdAltura.textContent,
        // também é possível criar uma função dentro do próprio objeto, deixando ela restrita a ele (neste caso anônima e recebe o nome do próprio atributo do objeto)
        // o this é executado para funções que são chamadas a partir de um objeto
        getImc : function(){
            if (this.altura != 0) {
                var imc = this.peso / (this.altura * this.altura);
                return imc;
            } else {
                console.log("Você, por menor que seja, não tem zero de altura :S")
            }
        }};
    // é preciso declarar essa variável por conta do código abaixo que substitue o valor do conteúdo pelo valor do imc e a mesma é retornada dentro do atributo getImc
    var imc = pacienteAtual.getImc();

    var tdImc = trPaciente.getElementsByClassName('info-imc')[0];;
        tdImc.textContent = imc.toFixed(2);

        console.log(imc);
};
