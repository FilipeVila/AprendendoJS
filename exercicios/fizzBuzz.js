//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz
//Não Divisível por 3 e/ou 5 => Não FizzBuzz
//Não é um número => 'Não é um número" 

const resultado = fizzBuzz(50);
console.log(resultado);

function fizzBuzz (entrada){
    if (typeof entrada !== 'number')
        return 'Não é um numero';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
        return 'Não é um Número';
}