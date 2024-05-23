// Gerade Zahlen & Mittelwert berechnen
const numbers = [4, 9, -3, -9, -5, 10, 2, 1, 14];
const positiveNumbers = numbers.filter((num) => num > 0);
const positiveSum = positiveNumbers.reduce((acc, num) => acc + num, 0);
const average = positiveSum / positiveNumbers.length;
console.log(`Mittelwert{average}`);

//Satz rückwärts & verdoppelt
modifiedText = modifiedText.replace(
  /Das Leben ist schön/g,
  "nnööhhccss ttssii nneebbeeLL ssaaDD"
);
console.log(`rückwärts & verdoppelnn: {modifiedText}`);

//wie oft a & e
let textToModify = "Das Leben ist schön.";
let modifiedText = textToModify.count(/[ae]/).join("");
console.log(`wie viele 'a' und 'e': {modifiedText}`);
