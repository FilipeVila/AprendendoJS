//constructor Functions

//camelCase umDoisTresQuatro
function criarCelular (marcaCelular,tamanhoTela, capacidadeBateria){
  return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
              console.log ("fazendo ligação...")
        }
  }
}

//Pascal Case umDoisTresQuatro
function Celular (marcaCelular, tamanhoTela, capacidadeBateria) {
      this.marcaCelular = marcaCelular,
      this.tamanhoTela = tamanhoTela,
      this.capacidadeBateria = capacidadeBateria,
      this.ligar = function(){
            console.log ("fazendo ligação...");
      }
}
const celular = new Celular ('Asus', 5.5, 5000);
console.log (celular);