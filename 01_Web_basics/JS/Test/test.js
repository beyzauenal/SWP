// Array der Zahlen
const numbers = [14, 12, 9, 8, 5, 3];

// Zähle jede 2. Zahl zusammen
let sum = 0;
for (let i = 0; i < numbers.length; i += 2) {
  sum += numbers[i];
}
console.log(`Summe jeder 2. Zahl: {sum}`);

// Text ausgeben
const originalText = "Haansss issst eein neetteer KKKeerl";
console.log(`Originaler Text: {originalText}`);

// Buchstaben a und e löschen
let textToModify = "Hier ist ein Beispieltext, modifizieren.";
let modifiedText = textToModify.split(/[ae]/).join("");
console.log(`Text nach Löschen von 'a' und 'e': {modifiedText}`);

// Buchstaben H vervierfachen
modifiedText = modifiedText.replace(/H/g, "HHHH");
console.log(`Text nach Vervierfachung von 'H': {modifiedText}`);

// Positiven Zahlen den Mittelwert berechnen
const positiveNumbers = numbers.filter((num) => num > 0);
const positiveSum = positiveNumbers.reduce((acc, num) => acc + num, 0);
const average = positiveSum / positiveNumbers.length;
console.log(`Mittelwert der positiven Zahlen: {average}`);
