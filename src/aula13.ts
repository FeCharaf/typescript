// Functions 2


//Valores padroes quando se omite o valor na chamada da função
function soma(n1:number=0,n2:number=2):number {  
    return n1 + n2;
}

console.log(soma())


//parametro nome é opcional
function novoUser(user:string, pass:string, nome?:string):void {
    console.log(`User:${user}`);
    console.log(`Pass::${pass}`);
    console.log(`Nome::${nome}`);
}

novoUser('br','123');