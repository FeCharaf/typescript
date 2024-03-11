interface curso {
  titulo: string;
  des: string;
  aulas: number;
  maxAlunos?: number;  //Opcional
  iniciarCurso(p:string):void;
}

interface cursoProg extends curso {
  aulas:number;
  maxAlunos?:number;
}

function iniciarCurso(p:string):void{
  console.log(p)
}

let curso1:curso;



curso1={titulo:"Typescript",des:"Curso de Typescript",aulas:100,maxAlunos:50,iniciarCurso(p:string){}};
