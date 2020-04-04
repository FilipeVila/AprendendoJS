//Objeto Postagem de Blog (Exercício)
//Eu quero que você Crie nest exercício um objeto postagem de
//blog que  vai conter as seguintes propriedades
//postagem
/*
titulo
mensagem
autor
visualizções
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 150,
    comentarios: [
          {autor: 'a', mensagem: 'b'},
          {autor: 'b', mensagem: 'c'}
    ],
    estaAoVivo: true
}

console.log(postagem);
