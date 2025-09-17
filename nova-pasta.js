let valorDiaria = 0
let valorTaxa = 0

function locadora(dias,km){
    valorDiaria = 90*dias
    if ((km - (dias*100)) >0){
    valorTaxa = (km - (dias*100))*12
    }
    valorPago = valorDiaria + valorTaxa

    return valorPago

}

console.log (locadora(9,1100))