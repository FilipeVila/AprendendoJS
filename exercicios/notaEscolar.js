//Exercício Nota Escolar
//Obter a média a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70,70,80];
//73,33
console.log(mediaDoAluno(array));

//function mediaDoAluno (notas){
  //let soma = 0;
  //for (let nota of notas) {
    //  soma += nota;
 // }
  //const media = soma/(notas.length)

  //if (media >= 0 && media <= 59) //modo 1 de escrever o if
    //return 'F';
  //if (media <= 59) return 'F';  //modo 2 de escrever o código.
  //if (media <= 69) return 'D';
  //if (media <= 79) return 'C';
  //if (media <= 89) return 'B';
    //return 'A';
//}

//Principio de responsabilidade unica
function mediaDoAluno (notas){
const media = calcularMedia(notas);

  if (media <= 59) return 'F';  
  if (media <= 69) return 'D';
  if (media <= 79) return 'C';
  if (media <= 89) return 'B';
     return 'A';
    }

function calcularMedia(array){
  let soma = 0;
  for (let valor of array){
      soma += valor;      
  }
  return soma/(array.length);
  }
