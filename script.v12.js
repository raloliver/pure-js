//função para calcular IMC
function calcAllImc (){
    //coletar todos os elementos com a mesma classe
    var rowPaciente    = document.getElementsByClassName('paciente');

    // também é possível passar uma função anônima dentro do argumento de uma função
    // veja que a função precisa de um argumento, chamado trPaciente e como mesmo é passado no arquivo array.js ele é apenas chamado dentro da função anônima abaixo
    walksArray(rowPaciente, function (trPaciente){
        // ao criar uma função dentro de outra, criamos um citação de primeira classe pois o mesmo pode ser usado como argumento
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
    })
}

var botao = document.getElementById('calcula-imcs');
//neste caso não é necessário o () por que o browser vai chamar a função
/*
botao.onclick = calcAllImc;
botao.onclick = function() {
    console.log("Calculando...");
}
*/
//caso você queira mais de um evento num clique, use o método addEventListener() o mesmo recebe dois argumentos, o primeiro é o evento e o segundo é a função
//também é possível criar outros eventos e comportamentos com addEventListener
botao.addEventListener('click', calcAllImc);
/*
botao.addEventListener('click', function (){
    console.log('Calculando...');
})
*/
