//Criar uma função  que exibe a quantidade de *
//que aquela linha possui
exibirAsteriscos(10);

function exibirAsteriscos(linhas){
//  let padrao = '';
//  for(let linha =1; linha <= linhas; linha++){
//    padrao += '*';
//    console.log(padrao);
//  }
//} //modo 1 de fazer o exercicio

for (let linha = 1; linha <=linhas; linha++ ){
    let padrao = '';
    for (let i = 0; i < linha; i++){ //loop interior 
        padrao += '*';
    }
    console.log(padrao);
}
}
