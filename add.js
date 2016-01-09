//o getElementsByTagName retorna sempre um array com base no argumento e no índice
/*
var tabela = document.getElementsByTagName('table')[0];
*/
//mas usar o querySelector, pois ele recebe uma string que será um seletor e o mesmo retorna sempre um elemento
/*
document.querySelectorAll('selector'); //retorna um array de elementos
*/


//selecionamos o elemento e criamos uma variável para isso
var botao = document.querySelector('#adicionar-paciente');
//criacao uma funcao para ser chamada no click do botao
botao.addEventListener('click', function(event) {
    event.preventDefault(); //impedir o comportamento padrão do elemento
//aqui vamos selecionar os inputs que desejamos capturar valores
    var nome    = document.querySelector('#campo-nome');
    var peso    = document.querySelector('#campo-peso');
    var altura  = document.querySelector('#campo-altura');
//vamos criar uma variável quem tem como conteúdo os valores que desejamos adicionar
    var addPaciente = "<tr class='paciente'>"+
                            //aqui usamos o .value para capturar o conteúdo do input
                            "<td class='info-nome'>"+nome.value+"</td>"+
                            "<td class='info-peso'>"+peso.value+"</td>"+
                            "<td class='info-altura'>"+altura.value+"</td>"+
                            "<td class='info-imc'></td>"+
                        "</tr>";
    var tabela = document.querySelector('table'); //retorna apenas o primeiro elemento
    tabela.innerHTML = tabela.innerHTML+addPaciente; //o innerHTML adicionar elementos no formato HTML
//aqui limpamos o conteúdo do input após o envio dos dados
    nome.value  = "";
    peso.value  = "";
    altura.value  = "";
});
