//creo una variabile per la somma
var somma = 0;

//crei un ciclo di 10 iterazioni dove andrò a chiedere il prompt

for(var i = 0; i < 10; i++){
  var nuovoNumero = parseInt(prompt("Inserisci un numero"));
  somma += nuovoNumero;
}

//output

console.log(somma);

/* var numero1 = parseInt(prompt("Inserisci un numero"))
var numero2 = parseInt(prompt("Inserisci un numero"))
var numero3 = parseInt(prompt("Inserisci un numero"))
var numero4 = parseInt(prompt("Inserisci un numero"))
var numero5 = parseInt(prompt("Inserisci un numero"))
var numero6 = parseInt(prompt("Inserisci un numero"))
var numero7 = parseInt(prompt("Inserisci un numero"))
var numero8 = parseInt(prompt("Inserisci un numero"))
var numero9 = parseInt(prompt("Inserisci un numero"))
var numero10 = parseInt(prompt("Inserisci un numero"))


console.log(numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10 + " é il risultato ") */