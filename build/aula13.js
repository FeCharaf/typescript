"use strict";
function somar(n1 = 0, n2 = 2) {
    return n1 + n2;
}
console.log(somar());
function novoUser(user, pass, nome) {
    console.log(`User:${user}`);
    console.log(`Pass::${pass}`);
    console.log(`Nome::${nome}`);
}
novoUser('br', '123');
