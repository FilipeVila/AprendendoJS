//Velocidade Máxima de até 70
//A cada 5km acima do limite você ganha 1 ponto
// Math.floor()
//caso pontos maior que 12 -> "Carteira suspendida"

verificarVelocidade(60);

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 60;
  const kmPorPonto = 5;
  if (velocidade <= velocidadeMaxima)
    console.log('OK');
  else{
    const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto))
    if (pontos >= 12)
    console.log ('Carteira Suspensa');
    else
      console.log ('pontos', pontos);
    }
  }
