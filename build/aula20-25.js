"use strict";
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Número.:${this.numero}`);
    }
    get saldo() {
        return this.saldoconta;
    }
    set saldo(saldoconta) {
        this.saldoconta = saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("Valor inválido");
        }
        else {
            this.saldoconta += valor;
        }
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log("Tipo: PF");
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log(`-----------------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor muito grande para esse tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log("Valor de saque muito grande para esse tipo de conta");
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log("Tipo: PJ");
        super.info();
        console.log(`CPF: ${this.cnpj}`);
        console.log(`-----------------------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor muito grande para esse tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log("Valor de saque muito grande para esse tipo de conta");
        }
        else {
            super.saque(valor);
        }
    }
}
const cont1 = new ContaPJ(222444, "Felipe");
const cont2 = new ContaPF(111, "Charaf");
cont1.info();
cont2.info();
console.log(cont1.saldo);
cont1.saldo = 300;
console.log(cont1.saldo);
