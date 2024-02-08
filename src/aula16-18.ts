// POO

class Computador {
    nome:string = "Computador 1";
    ram:number = 0;
    cpu:number = 0;
    ligado:boolean = false;

    constructor(nome:string,ram:number,cpu:number) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        console.log(`Novo Computador criado! Nome: ${nome}, Ram: ${ram}, Cpu: ${cpu}`)
    }
}

// INTANCIAÇÃO

const comp1 = new Computador("Comp1",12,10);