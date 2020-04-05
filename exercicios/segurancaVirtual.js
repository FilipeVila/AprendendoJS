//projeto - Segurança virtual

/* você precisa pegar o nome da pessoa que está tentando
entrar naquela lugar
* Você precisa perguntar a ele(a) quem a convidou para
essa festa
*Você precisa de um botão na tela que quando você clicar
irá acessar o seu código javascript para verificar se a
pessoa que está tentando entrar foi de fato convidada por
quem ela diz que a convidou.
(ex.: Nome da pessoa Filipe, quem convidou para festa
Thiago, clico no botão, o javascript pega as informações
que eu preenchi na tela a verificar da lista de convidados
do Thiago, o meu nome está lá)
* Caso meu nome esteja, eu vou alterar a descrição de
"pesquisando" para "Você pode Entrar!"
* Caso meu nome não esteja. eu vou alterar a descrição
de "pesquisando" para "Você não está na Lista!"*/

function verificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadoThiago = ['Amanda', 'Filipe', "Sabrina", 'Rafael', 'Jonas',
    'Carol', 'Jhonatan']
    if(ConvidadoThiago.includes(NomeConvidado)){
      document.getElementById('permissaoDeEntrada').innerText ='Você pode Entrar!'
    } else {
      document.getElementById('permissaoDeEntrada').innerText = 'Você não está na Lista!'
    }
}