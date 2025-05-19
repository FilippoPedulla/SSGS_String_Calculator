const concat = require('./functions').concat;
const removeSpaces = require('./functions').removeSpaces;
const allUpperCase = require('./functions').Uppercase;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Benvenuto in SSGS-Calculator-String!");
console.log("Scegli l'operazione da eseguire:");
console.log("1. Concatenazione");
console.log("2. Rimozione spazi");
console.log("3. Tutte maiuscole");
console.log("4. Esci");

let operation, result;

function concatenazione() {
    readline.question("Inserisci la prima stringa: ", (input2) => {
      readline.question("Inserisci la seconda stringa: ", (input3) => {
        result = concat(input2, input3);
        console.log(`Il risultato è: ${result}`);
        calculator();
      });
  });
}

function rimuovi_spazi() {
  readline.question("Inserisci la stringa: ", (input2) => {
    result = removeSpaces(input2);
    console.log(`Il risultato è: ${result}`);
    calculator();
  });
}

function tutte_maiuscole() {
  readline.question("Inserisci la stringa: ", (input2) => {
    result = allUpperCase(input2);
    console.log(`Il risultato è: ${result}`);
    calculator();
  });
}


function calculator() {
  readline.question("Inserisci l'operazione da eseguire: ", (input1) => {
    operation = parseInt(input1);
    if (isNaN(operation) && operation !== 1 && operation !== 2 && operation !== 3 && operation !== 4 && operation !== 5) {
      console.log('Operazione non valida');
      calculator();
    }
    switch (operation) {
      case 1:
        concatenazione();
        break;
      case 2:
        rimuovi_spazi();
        break;
      case 3:
        tutte_maiuscole();
        break;
      case 4:
        console.log("Arrivederci!");
        readline.close();
        process.exit();
      default:
        console.log('Operazione non valida');
    }
  });
}
calculator();