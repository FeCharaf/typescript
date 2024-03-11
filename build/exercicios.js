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
verificarIdade(19) ? console.log("Sim") : console.log("Não");
