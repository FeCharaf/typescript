abstract class Conta { // Classe abstrata nao pode ser instanciada
  protected numero: number;
  protected titular: string;
  private saldoconta:number;
  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
    this.saldoconta = 0;
  }
  private gerarNumeroConta():number {
    return Math.floor(Math.random()*100000)+1
  }
  protected info() {
    console.log(`Titular:${this.titular}`)
    console.log(`Número.:${this.numero}`)
  }

  get saldo():number{ //Getter
    return this.saldoconta
  }

  set saldo(saldoconta:number) { //Setter
    this.saldoconta = saldoconta
  }

  protected deposito(valor:number){
    if(valor < 0){
      console.log("Valor inválido")
    } else {
      this.saldo+=valor
    }
  }
  protected saque(valor:number){
    if(valor < 0){
      console.log(`Valor inválido`)
      return
    }
    if(valor <= this.saldoconta){
      this.saldo-=valor
    }else{
      console.log(`Saldo insuficiente`)
    }
  }
}

class ContaPF extends Conta {
    cpf: number
    constructor(cpf:number, titular:string){
        super(titular)
        this.cpf = cpf
    }
    info(){
      console.log("Tipo: PF")
      super.info()
      console.log(`CPF: ${this.cpf}`)
      console.log(`-----------------------------`)
    }
    public deposito(valor: number) {
      if(valor>1000){
        console.log(`Valor muito grande para esse tipo de conta`)
      }else{
        super.deposito(valor)
      }
    }
    public saque(valor:number) {
      if(valor>1000){
        console.log("Valor de saque muito grande para esse tipo de conta")
      }else{
        super.saque(valor)
      }
    }
}

class ContaPJ extends Conta {
    cnpj: number
    constructor(cnpj:number,titular:string){
        super(titular)
        this.cnpj = cnpj
    }

    info(){
      console.log("Tipo: PJ")
      super.info()
      console.log(`CPF: ${this.cnpj}`)
      console.log(`-----------------------------`)
    }
    public deposito(valor: number) {
      if(valor>10000){
        console.log(`Valor muito grande para esse tipo de conta`)
      }else{
        super.deposito(valor)
      }
    }
    public saque(valor:number) {
      if(valor>10000){
        console.log("Valor de saque muito grande para esse tipo de conta")
      }else{
        super.saque(valor)
      }
    }
}

const cont1 = new ContaPJ(222444, "Felipe");
const cont2 = new ContaPF(111, "Charaf");

cont1.info()
cont2.info()
console.log(cont1.saldo) // O método saldo() se tornou uma propriedade por ser do tipo Getter.
cont1.saldo = 300; // Setter em ação
console.log(cont1.saldo)