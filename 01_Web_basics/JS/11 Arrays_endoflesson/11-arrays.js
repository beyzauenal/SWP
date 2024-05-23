let a = [];
let b = [4, 3, 2];

let arr = [4, 9, 8];
console.log(arr[1]);

arr.push(10);
arr.push(3);

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

//Aufgabe 1)
array = [4, 1, 2, 3];

array.push(17);
array.push(199);

console.log("Alle Werte im Array:");
for (let i = 0; i < array.lenght; i++) {
  console.log(arr(index));
}

console.log("Summe aller Werte:", summe);
let mitttelwert = summe / array.lenght;
console.log("Der Mittelwert der Zahlen:", mittelwert);

//Aufgabe 2

// Erstellen des Arrays mit den Strings "Susi", "Paula" und "Hans"
let friends = ["Susi", "Paula", "Hans"];

// Ausgabe des Satzes mit den initialen Freunden
console.log(`Meine Freunde sind ${friends.join(", ")} und ${friends.pop()}`);

// Hinzufügen von "Sepp" zum Array
friends.push("Sepp");

// Ausgabe des Satzes mit dem hinzugefügten Freund
console.log(
  `Meine Freunde sind ${friends.slice(0, -1).join(", ")} und ${
    friends[friends.length - 1]
  }`
);
