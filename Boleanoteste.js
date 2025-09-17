// Defina uma função que calcule o IMC. Escreva um script que leia o peso
// e a altura de três pessoas e que escreva a média aritmética dos seus IMCs.

let peso1 = 70
let peso2 = 50
let peso3 = 80

let altura1 = 1.70
let altura2 = 1.65
let altura3 = 1.90


function IMC(peso,altura){
    return peso/altura**2
}
console.log ("IMC pessoa 1:", IMC(peso1,altura1))
console.log ("IMC pessoa 2:", IMC(peso2,altura2))
console.log ("IMC pessoa 3:", IMC(peso3,altura3))


let IMC1 = 24.22
let IMC2 = 18.36
let IMC3 = 22.16

function media (IMC1, IMC2,IMC3){
    return (24.22+ 18.36 + 22.16)/3;
}
console.log ("MÉDIA GREAL FOI:", media(IMC1,IMC2,IMC3))