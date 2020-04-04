//Encontrando Elementos(tipos de Referência)

const marcas = [
  {id:1 , nome:'a'},
  {id:2 , nome:'b'},
  {id:3 , nome:'c'},
  {id:4 , nome:'d'},
];

//console.log(marcas.includes({id:1,nome:'a'}));

const marca =  marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);