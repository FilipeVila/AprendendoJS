//Javascript adicionando elementos

const numeros = [1,2,3];

//início
numeros.unshift(0);
console.log(numeros);
//Meio
numeros.splice(1,0,'a');
//Final
numeros.push(4)
console.log(numeros);
