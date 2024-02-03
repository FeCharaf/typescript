// ARROW FUNCTIONS

const teste = (): void => {
  console.log("Teste");
};

teste();

//Criando função de forma direta

const somaArray = (n: number[]): number => {
  let s: number = 0;
  n.forEach((element) => {
    // o metodo forEach precisa de uma função com parametro(função de callback)
    s += element;
  });
  return s;
};

console.log(somaArray([10, 20, 30]));

var somatorio: number = 0;
var ar: number[] = [10, 20, 50];

ar.forEach((e: number) => {
  somatorio += e;
});

console.log(somatorio);