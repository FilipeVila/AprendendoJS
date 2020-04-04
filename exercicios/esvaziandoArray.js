//Esvaziando um Array
let numeros = [1,2,3,4,5];
let outros = numeros;
//solucão 1 
//numeros = [];
//console.log(outros);

//solução 2  
numeros.length = 0;
console.log(numeros);
console.log(outros);

//Solução 3
//numeros.splice(0, numeros.length);
//console.log(numeros);
//console.log(outros);

//Solução 4
//while (numeros.length > 0)
//    numeros.pop();



