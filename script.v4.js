var tdPeso      = document.getElementById('peso-1');
var tdAltura    = document.getElementById('altura-1');

var peso1   = tdPeso.textContent;
var altura1 = tdAltura.textContent;
var paciente1 = {
    'peso'  : peso1,
    'altura': altura1
};

var tdPeso      = document.getElementById('peso-2');
var tdAltura    = document.getElementById('altura-2');

var peso2   = tdPeso.textContent;
var altura2 = tdAltura.textContent;
var paciente2 = { peso : peso2, altura : altura2};

var pacientes       = [paciente1, paciente2]
var posicaoAtual    = 0;
//neste caso o tamanho da array é 2, apesar da última posição ser 1, por isso usamos o -1
while(posicaoAtual <= pacientes.length -1){

    var paciente = pacientes[posicaoAtual];

    if (paciente.altura != 0) {
        var imc = paciente.peso / (paciente.altura * paciente.altura);

        /*
        var tdImc = document.getElementById('imc-2');
        tdImc.textContent = imc.toFixed(2);
        */

        console.log(imc);
    } else {
        console.log("Você, por menor que seja, não tem zero de altura :S")
    }
    //aqui incrementamos a função adicionando mais um ao final do loop
    //posicaoAtual = posicaoAtual + 1;
    posicaoAtual ++;
}
