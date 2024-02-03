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
var somatorio = 0;
var ar = [10, 20, 50];
ar.forEach((e) => {
    somatorio += e;
});
console.log(somatorio);
