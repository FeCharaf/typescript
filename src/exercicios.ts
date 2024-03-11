//1
let cnome: string = "João";
const cidade: number = 25;
//2
function verificarIdade(idade: number): boolean {
  if (idade >= 18) {
    console.log("É maior de idade");
    return true;
  } else {
    console.log("É menor de idade");
    return false;
  }
}
//3


verificarIdade(19) ? console.log("Sim") : console.log("Não");
