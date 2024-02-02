"use strict";
const teste = () => {
    console.log("Teste");
};
teste();
const somaArray = (n) => {
    let s = 0;
    n.forEach((element) => {
        s += element;
    });
    return s;
};
console.log(somaArray([10, 20, 30]));
