class Bancaria{
    constructor(cpf,nome,saldo){
        this.cpf = cpf;
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(dinheiro){
        this.saldo +=dinheiro
        console.log("Valor de Depósito: R$", dinheiro + ". Saldo Atual: R$", this.saldo);
    }

    saque(dinheiro){
        this.saldo -= dinheiro
        console.log("Valor de Saque: R$", dinheiro + ". Saldo Atual: R$", this.saldo);
    }

    transferencia(dinheiro, contaRecebedora){
        this.saque(dinheiro);
        contaRecebedora.depositar(dinheiro);
        console.log("Valor da Transferência: R$", dinheiro, ". Saldo Atual REMETENTE: R$", this.saldo, ". Saldo Atual DESTINATÁRIO: R$", contaRecebedora.saldo);
    }

}

let pepeu = new Bancaria("000.111.222-33", "Pepeuzin", 1000)
let juliaoDaMassa = new Bancaria("023.244.453-78", "Julião", 7000)

pepeu.depositar(200)
pepeu.saque(100)
pepeu.transferencia(500, juliaoDaMassa)