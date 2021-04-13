var numero_utente = parseInt(prompt("inserisci un numero"))

while(numero_utente){
  var i = numero_utente
  if(i%2 === 0){
    console.log("il numero è pari");
    break
  }else{
    console.log(numero_utente + 1);
    break
  }
}