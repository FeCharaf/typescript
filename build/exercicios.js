"use strict";
let cnome = "João";
const cidade = 25;
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("É maior de idade");
        return true;
    }
    else {
        console.log("É menor de idade");
        return false;
    }
}
function mostrarDetalhesUsuario(p) {
    console.log(p.nome);
    console.log(p.idade);
}
const user = { nome: "Felipe", idade: 20 };
class Animal {
    nome;
    tipo;
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
}
class Cachorro extends Animal {
    raca;
    constructor(raca, nome, tipo) {
        super(nome, tipo);
        this.raca = raca;
    }
    latir() {
        console.log("Au Au!");
    }
}
const thor = new Cachorro("border collie", "thor", "grande");
function inverterArray(array) {
    return array.reverse();
}
const arrayNormal = [1, 2, 3, 4];
const arrayInverso = inverterArray(arrayNormal);
console.log(arrayInverso);
