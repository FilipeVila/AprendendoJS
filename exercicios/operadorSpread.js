//Operador spread

const primeiro = [1,2,3];
const segundo = [4,5,6];

//const combinado = primeiro.concat(segundo);
const combinado = [...primeiro,'a',...segundo,'#'];
//const cortado = combinado.slice();
console.log(combinado);
const clonado = [...combinado];
console.log(clonado);
//spread
