// Functions


// Função com dois parametros do tipo number que retorna number.
function soma(n1:number,n2:number):number {
    return n1 + n2;
}



// Função com dois parametros do tipo number que retorna void.
function soma2(n1:number, n2:number):void { 
    let res=n1 + n2;
    console.log(res);
}

soma2(5,10);
console.log(soma(2,5));