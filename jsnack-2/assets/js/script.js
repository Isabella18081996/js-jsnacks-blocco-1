//inserimento dei 2 prompt

var prima_parola = prompt("Inserisci la prima parola")
var seconda_parola = prompt("Inserisci la seconda parola")

console.log(prima_parola)
console.log(seconda_parola)

//verifico le lunghezze e faccio output

if(prima_parola.length == seconda_parola.length){
  alert("le parole sono uguali")
}else if(prima_parola.length < seconda_parola.length){
  console.log(prima_parola + " " + seconda_parola)
}else{
  console.log(seconda_parola + " " + prima_parola)
}
