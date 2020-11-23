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

var listRndUser = [];
while(listRndUser.length < (100-16)){
  var userNumber = Number(prompt("insert a number from 1 to 100"));
  if(listRndUser.includes(userNumber) == false){
    listRndUser.push(userNumber);
  }

  console.log(userNumber);
}
console.log(listRndUser);


// 5. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// if (userNumber == listRndPc[numRandomPc]){
//   console.log("hai perso")
// }
// 6. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// 7. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
