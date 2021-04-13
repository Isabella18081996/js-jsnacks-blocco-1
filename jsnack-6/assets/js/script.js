//STAMPA IL CUBO DEI PRIMI N NUMERI, DOVE N é UN NUMERO INDICATO DALL'UTENTE

// richiedo numero all'utente

var limite = parseInt(prompt("Di quanti numeri vuoi sommare il cubo?"));

//console.log(limite);

// inizializzo una var per la somma
var somma = 0;
//creo un ciclo dove calcolo i cubi e li sommo

for(var i = 1; i <= limite; i++){
  console.log(i)
  console.log(Math.pow(i,3))
  console.log("-------------")
  somma += Math.pow(i,3);
  console.log(" ---- SOMMA ---" + somma)
}

//output

console.log("la somma dei cubi è " + somma)
