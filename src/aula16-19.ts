// POO

class Computador {
  nome: string;
  private ram: number;
  private cpu: number;
  private ligado: boolean;

  constructor(nome: string, ram: number, cpu: number, ligado: boolean = false) {
    // Desligado por padrao
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = ligado;
  }

  info():void {
    // Método info
    console.log(`Nome..: ${this.nome}`);
    console.log(`RAM...: ${this.ram}`);
    console.log(`CPU...: ${this.cpu}`);
    console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`); // Operador Ternário
    console.log(`---------------------------`);
  }

  ligar():void {
    this.ligado = true;
  }
}

// INTANCIAÇÃO

const comp1 = new Computador("Comp1", 12, 10);
const comp2 = new Computador("Comp2", 12, 10);
const comp3 = new Computador("Comp3", 12, 10);

comp1.ligar();
comp1.info();
comp2.info();
comp3.info();
