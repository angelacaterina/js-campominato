//// FUNZIONE: generatore di numeri casuali

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// console.log(getRandomNumber(1, 100));

// 1. Il computer deve generare 16 numeri casuali tra 1 e 100.
// 2. I numeri non possono essere duplicati
var numbersPc = [];
while (numbersPc.length !== 16){
  var numRndPc = getRandomNumber(1, 100);
  // if(! inArray(numbersPc, numRndPc)){
  //   numbersPc.push(numRndPc);
  // } ////utilizza funzione

  if(numbersPc.includes(numRndPc) == false){
    numbersPc.push(numRndPc);
  }
}
console.log(numbersPc, numbersPc.length);

//// FUNZIONE: verifica se un numero è presente in array
// function inArray(array, number){
//   var i = 0;
//   while(i < array.length){
//     if(number === array[i]){
//       return true;
//     }
//     i++;
//   }
// }

// 3. in seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// 4. L’utente non può inserire più volte lo stesso numero.
// 5. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// 6. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
var numbersUser = [];
var possibilita = 100-16;

for(var i = 0; i < possibilita; i++){
  var userNumber = Number(prompt("insert a number from 1 to 100"));
  if(userNumber > 100 || userNumber === 0){
    alert("Game Over, hai inserito un numero non valido! Premi OK e riavvia il gioco");
    break;
  } //numero > max

  if(numbersUser.includes(userNumber) == true){
    alert("Hai già usato questo numero! Non puoi usare lo stesso numero più volte. Premi OK e riprova");
    userNumber = Number(prompt("insert a number from 1 to 100"));
  }

  if(numbersPc.includes(userNumber)){
    console.log("Bomba Game Over");
    alert("Game Over, il tuo punteggio è: " + numbersUser.length );
    break; //bomba
  }

  ////utilizza funzione
  // if(userNumber > 100 || userNumber === 0){
  //   alert("Game Over, hai inserito un numero non valido! Premi OK e riavvia il gioco");
  //   break;
  // }
  // while(inArray(numbersUser,userNumber)){
  //   alert("Hai già usato questo numero! Non puoi usare lo stesso numero più volte. Premi OK e riprova");
  //   userNumber = Number(prompt("insert a number from 1 to 100"));
  // }
  // if(inArray(numbersPc, userNumber)){
  //   console.log("Bomba Game Over");
  //   alert("Game Over, il tuo punteggio è: " + numbersUser.length );
  //   break;
  // }
  numbersUser.push(userNumber);
}
console.log(userNumber, numbersUser);

// 7. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
if (numbersUser.length == possibilita){
  alert("Victory il tuo punteggio è: " + numbersUser.length);
}
