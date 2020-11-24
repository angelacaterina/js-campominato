// BONUS: (da fare solo se funziona tutto il resto)
// 1. all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
var difficulty = Number(prompt("choose your difficulty [0/1/2]"));
console.log(difficulty);
// 2. con difficoltà 0 => tra 1 e 100
// 3. con difficoltà 1 =>  tra 1 e 80
// 4. con difficoltà 2 => tra 1 e 50
var min, max;

switch (difficulty) {
  case 0:
    min = 1;
    max = 100;
    alert("Hai scelto il livello Easy, numeri tra 1 e 100");
    break;
  case 1:
    min = 1;
    max = 80;
    alert("Hai scelto il livello Middle, numeri tra 1 e 80")
    break;
  case 2:
    min = 1;
    max = 50;
    alert("Hai scelto il livello Hard, numeri tra 1 e 50")
    break;
  default:
    alert("Non ho capito! Riprova.");
    break;
}
console.log(min,max);


//// FUNZIONE: generatore di numeri casuali
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// console.log(getRandomNumber(1, 100));


var numbersPc = [];
while (numbersPc.length !== 16){
  var numRndPc = getRandomNumber(min, max);
  if(! inArray(numbersPc, numRndPc)){
    numbersPc.push(numRndPc);
  }
}
console.log(numbersPc, numbersPc.length);

//// FUNZIONE: verifica se un numero è presente in array
function inArray(array, number){
  var i = 0;
  while(i < array.length){
    if(number === array[i]){
      return true;
    }
    i++;
  }
}

var numbersUser = [];
var possibilita = max - 16;

for(var i = 0; i < possibilita; i++){
  var userNumber = Number(prompt("insert a number from 1 to " + max));
  while(inArray(numbersUser,userNumber)){
    alert("Hai già usato questo numero! Non puoi usare lo stesso numero più volte. Premi OK e riprova");
    userNumber = Number(prompt("insert a number from 1 to " + max));
  }
  if(inArray(numbersPc, userNumber)){
    console.log("Bomba Game Over");
    alert("Game Over, il tuo punteggio è: " + numbersUser.length );
    break;
  }

  numbersUser.push(userNumber);
  console.log(userNumber);
}
console.log(userNumber, numbersUser);

if (numbersUser.length == possibilita){
  alert("Victory il tuo punteggio è: " + numbersUser.length);
}
