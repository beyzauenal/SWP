// Erstelle eine Zufallszahl zwischen 5 und 10
let randomNumber = Math.floor(Math.random() * 6) + 5;

// Gib den generierten Wert aus
console.log("Die generierte Zufallszahl ist:", randomNumber);

// Überprüfe den Wert und gib entsprechend aus
switch (randomNumber) {
    case 10:
        console.log("Ten");
        break;
    case 9:
        console.log("Nine");
        break;
    case 8:
        console.log("Eight");
        break;
    default:
        console.log("Die Zahl entspricht keiner der Bedingungen (nicht 8, 9 oder 10).");
}
