"use strict";
class TesteGenerics {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const t1 = new TesteGenerics("nova string");
const t2 = new TesteGenerics(10);
console.log(t1.valor);
console.log(t2.valor);
