//Criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
  titulo : 'Parasita',
  ano : 2019,
  diretor : 'Bong Joon-ho',
  bilheteria : 202.3,
  premios : 'Oscar de Melhor filme, Palma de Ouro, MAIS',
  indicacoes : 'Prêmio de intepretação feminina, MAIS'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
  for(prop in obj)
    if (typeof obj[prop] === 'string')
      console.log (prop,obj[prop])
}