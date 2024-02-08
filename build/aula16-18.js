"use strict";
class Computador {
    nome = "Computador 1";
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        console.log(`Novo Computador criado! Nome: ${nome}, Ram: ${ram}, Cpu: ${cpu}`);
    }
}
const comp1 = new Computador("Comp1", 12, 10);
