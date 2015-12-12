var tdPeso      = document.getElementById('peso-2');
var tdAltura    = document.getElementById('altura-2');

// textConent: método Node do JS
/*
var peso    = tdPeso.textContent;
var altura  = tdAltura.textContent;
*/

//vamos criar um objeto, pois o peso e altura sempre estão vinculados a um objeto, o PACIENTE
var paciente = {
    'peso'  : tdPeso.textContent,
    'altura': tdAltura.textContent
};
//para coletar o peso do PACIENTE, devemos usar o dot Notation
/*
paciente.peso   // retorna o peso do PACIENTE
paciente.altura // retornar a altura do PACIENTE
*/

//alem do dot Notation, temos também outra forma do coletar as propriedades do objeto
/*
paciente['peso'];
paciente['altura'];
*/
if (paciente.altura != 0) {
    var imc = paciente.peso / (paciente.altura * paciente.altura);

    //selecionar o elemento para incluir no TD do IMC
    var tdImc = document.getElementById('imc-2');
    tdImc.textContent = imc;

    console.log(imc);
} else {
    console.log("Você, por menor que seja, não tem zero de altura :S")
}
