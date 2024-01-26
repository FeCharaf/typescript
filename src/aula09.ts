// ENUMERADORES

enum dias{
    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}

console.log(dias[2])

enum tipoUsuario{
    USER=10,
    ADMIN=100,
    SUPER=1000
}

const tp:tipoUsuario=tipoUsuario.ADMIN;
console.log(tp);