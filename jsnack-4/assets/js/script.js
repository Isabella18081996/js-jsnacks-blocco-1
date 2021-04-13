
var nome = [
  "Giovanna Rossi",
  "Pietro Bianchi",
  "Giada Maria Lucia",
  "Paolo Casino",
  "Isabella Nita",
  "Anna Fessas",
  "Ludovica Viscione",
  "Mario Rossi",
  "Samuele Valzi",
  "Marina Verde"
]

var name_to_found = prompt('Inserisci il tuo nome')

var accesso = false;

for( var i=0; i<nome.length; i++){
  var nome_scritto = nome[i]
  console.log(nome_scritto)
  if(nome_scritto === name_to_found){
    accesso = true
    console.log("accesso autorizzato");
    break;
  }
}

if(accesso){
  document.getElementById('risultato').innerHTML = "Hai diritto all'accesso."
}else{
  document.getElementById('risultato').innerHTML = "Non hai diritto all'accesso."
}