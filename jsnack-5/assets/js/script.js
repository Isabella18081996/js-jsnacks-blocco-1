//creo array vuoto
var array_di_numeri = [];



//ciclo di 6 per prompt e verifica

for(var i = 0; i < 6; i++){
  var nuovo_numero = parseInt(prompt("Inserisci un uovo numero"));

  if(nuovo_numero % 2 != 0){
    array_di_numeri.push(nuovo_numero);
  }

}


//output

console.log(array_di_numeri);