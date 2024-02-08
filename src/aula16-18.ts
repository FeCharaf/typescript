// POO

class Computador {
    nome:string = "Computador 1";
    ram:number = 0;
    cpu:number = 0;
    ligado:boolean = false;

    constructor() {
        console.log("Novo computador criado!")
    }
}

// INTANCIAÇÃO

const comp1 = new Computador();