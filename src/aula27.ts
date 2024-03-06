interface curso {
  titulo: string;
  des: string;
  aulas: number;
  maxAlunos?: number;  //Opcional
  iniciarCurso?(p:string):void;
}

let curso1:curso;

curso1={titulo:"Typescript",des:"Curso de Typescript",aulas:100,maxAlunos:50};

