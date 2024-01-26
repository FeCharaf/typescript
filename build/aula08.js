"use strict";
let dados = {
    nome: "Felipe",
    idade: 21,
    status: "A",
    ola: () => { console.log("Oi"); },
    info: (p) => { console.log(p); }
};
dados.ola();
dados.info("Felipe");
