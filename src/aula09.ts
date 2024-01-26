// ENUMERADORES

enum dias{
    domingo,
    segunda = 1,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}

console.log(dias)

enum tipoUsuario{
    USER=10,
    ADMIN=100,
    SUPER=1000
}

const tp:tipoUsuario=tipoUsuario.ADMIN;
console.log(tp);