// brincadeira do cauculo do IMC peso / altura * altura
var peso = 70;
var altura = 1.75;

// condição para exibir o resultado
/*
var condition = (altura != 0); //true
*/

// o JS executa o que vem primeiro da esquerda pra direita, para que execute primeiro, use o ()
if (altura != 0) {
    var imc = peso / (altura * altura);
    console.log(imc);
} else {
    console.log("Você, por menor que seja, não tem zero de altura :S")
}
