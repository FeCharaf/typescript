"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado = false) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`RAM...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log(`---------------------------`);
    }
    ligar() {
        this.ligado = true;
    }
}
const comp1 = new Computador("Comp1", 12, 10);
const comp2 = new Computador("Comp2", 12, 10);
const comp3 = new Computador("Comp3", 12, 10);
comp1.ligar();
comp1.info();
comp2.info();
comp3.info();
