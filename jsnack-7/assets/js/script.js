var limite = 1000;
var potenza;
var counterPotenza = 1;

while(potenza < limite){
  console.log(potenza)
  potenza = Math.pow(2,counterPotenza);
  
  counterPotenza++;
}

/* while(potenza < limite){
  console.log(potenza);
  potenza *=2;
} */