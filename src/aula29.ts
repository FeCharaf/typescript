class TesteGenerics<T> {
    public valor:T
    constructor(valor:T){
        this.valor = valor
    }
}

// O componente generic aceita tanto uma string quanto number
const t1=new TesteGenerics<string>("nova string")
const t2=new TesteGenerics<number>(10)

console.log(t1.valor)
console.log(t2.valor)