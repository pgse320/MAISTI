class Pai {
    constructor(nome, listaDeFilhos) {
      this.nome = nome;
      this.listaDeFilhos = listaDeFilhos;
    }
    identidade(QualNome){
        this.nome = QualNome
        
    }
    QuantosFilhos(){
        return this.filhos.length()
    }
    Inserir(NovoFilho){
        this.listaDeFilhos = NovoFilho
        listaDeFilhos.push (NovoFilho)
    }
}

let array = ["Pedro", "João", "Kelvin", "Gustavo", "Téo"];

function Pegador(listaDeFilhos){
    console.log("Meus Filhos: ", listaDeFilhos, "\n");

}

let Pepeu = new Pai("Júlio", ["Pedro", "Kelvin"]);
let juliaoDaMassa = new Pai("Pepeu", ["Gustavo", "Téo", "João"]);

console.log (Pepeu)
console.log (juliaoDaMassa)



