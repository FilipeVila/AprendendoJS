function verificarEntrada(){
  NomeConvidado = document.getElementById('nome').value;
  NumerosCPF = document.getElementById('CPF').valeu;


  ConvidadoThiago = ['Amanda', 'Filipe', "Sabrina", 'Rafael', 'Jonas']
  NumeroCPF = [1, 25981307404, 44791328485, 16443660455, 42083537408, 16415051415]
  
  if(NumeroCPF.includes(NumerosCPF)){
    document.getElementById('permissaoDeEntrada').innerText ='Você pode Entrar!'
  } else {
    document.getElementById('permissaoDeEntrada').innerText = 'Você não está na Lista!'
  }
}