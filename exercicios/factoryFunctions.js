function CriarCelular(){
  const celular = {
        marcaCelular : 'ASUS',
        tamanhoTela : {
            vertical : 155,
            horizontal : 75
        },
        capacidadeBateria: 5000,
        ligar : function(){
              console.log("fazendo ligação...")
        }
  }
  return celular; 
}

//Javascript  - Factory Functions (Função de Fábrica)

function CriarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
  return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
              console.log("Fazendo ligação...")
        }
  }
}
const celular1 = CriarCelular ('Zenfone', 5.5, 5000);
console.log(celular1);