// para isolar um código é recomendado criar-se uma função
// lembre-se: o argumento é vinculado pois o mesmo é invocado dentro da função e não existe dentro dela
function walksArray (rowPaciente, comportamento){
    for (var posicaoAtual = 0; posicaoAtual <= rowPaciente.length -1; posicaoAtual++) {
        var trPacienteAtual = rowPaciente[posicaoAtual];

        comportamento(trPacienteAtual)
    }
}
