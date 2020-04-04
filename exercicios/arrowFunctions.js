//Arrow Functions
const marcas =[
  {id:1, nome:'a'},
  {id:2, nome:'b'},
  {id:3, nome:'c'},
  {id:4, nome:'d'},
  {id:5, nome:'e'}
];

console.log (marcas.find(marca => marca.nome === 'e'));