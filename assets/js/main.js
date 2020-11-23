//  1. Il computer deve generare 16 numeri casuali tra 1 e 100.
// 2. I numeri non possono essere duplicati
var listRndPc = [];
while (listRndPc.length < 16){
  var numRandomPc = Math.floor(Math.random() * 100) + 1 ;

  if(listRndPc.includes(numRandomPc) == false){
    listRndPc.push(numRandomPc);
  }
}

console.log(listRndPc);

// 3. in seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// 4. L’utente non può inserire più volte lo stesso numero.
// 5. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// 6. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
var listUser = [];
while(listUser.length < 84){
  var userNumber = Number(prompt("insert a number from 1 to 100"));

  if(listUser.includes(userNumber) == false){
    listUser.push(userNumber);
  }

  if(listRndPc.includes(userNumber)){
    console.log("hai perso");
    break;
  }

  console.log(userNumber);
}
console.log(listUser);

// 7. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
if (listUser.length == 84){
  alert("punteggio: " + listUser.length);
}
