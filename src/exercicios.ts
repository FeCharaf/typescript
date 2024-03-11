//1
let cnome: string = "João";
const cidade: number = 25;
//2
function verificarIdade(idade: number): boolean {
  if (idade >= 18) {
    console.log("É maior de idade");
    return true;
  } else {
    console.log("É menor de idade");
    return false;
}

//verificarIdade(19) ? console.log("Sim") : console.log("Não");
}
//3
interface Usuario {
    nome:string;
    idade:number;
}

function mostrarDetalhesUsuario(p:Usuario) {
    console.log(p.nome)
    console.log(p.idade)
}

const user:Usuario = {nome: "Felipe", idade: 20};
//mostrarDetalhesUsuario(user);

//4

class Animal {
    nome:string;
    tipo:string;

    constructor(nome:string,tipo:string) {
        this.nome = nome
        this.tipo = tipo
    }
}

class Cachorro extends Animal {
    raca:string
    constructor(raca:string,nome:string,tipo:string){ // O Construtor do filho precisa de tudo que tem no do pai
        super(nome,tipo)
        this.raca = raca;
    }
    latir() {
        console.log("Au Au!")
    }
}

const thor = new Cachorro("border collie", "thor", "grande")
//thor.latir()
//console.log(thor)

//5

function inverterArray<T>(array: T[]){
    return array.reverse();
}

const arrayNormal:number[] = [1, 2, 3, 4]
const arrayInverso:number[] = inverterArray(arrayNormal);
console.log(arrayInverso)

