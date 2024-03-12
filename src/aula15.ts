function fsoma(...n:number[]){
    let s:number=0;
    for(let en of n){
        s+=en
    }

    // n.forEach((en)=>{
    //     s+=en;
    // })
    return s;
}

console.log(fsoma(10,20,30,40,50,60,70,80,90)) // Com o parametro rest ele executa a função fsoma independente da quantidade de parametros