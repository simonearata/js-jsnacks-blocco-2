var numeri_giocatore = [];
var sum = 0;

for(var i = 0; i < 6; i++){
  
  i = parseInt(prompt('Inserisci 5 numeri'));
  numeri_giocatore.push(i)
}
console.log(numeri_giocatore) 


for( var i = 0; i < numeri_giocatore.length; i++){
 
  sum += numeri_giocatore[i]
}

console.log(sum)
