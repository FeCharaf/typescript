class Conta{
    public numero:number
    public titular:string
    constructor(numero:number,titular:string) {
        this.numero = numero;
        this.titular = titular;
    }
}

class ContaPF extends Conta {

}

class ContaPJ extends Conta {

}

const cont1 = new ContaPJ(11223344,"Felipe")