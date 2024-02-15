let a = 8;
let b = 2;

if (a%==0){
    console.log("Number is even");
} else{
    console.log("Number is odd");
}


for (let index = 0; index < 500 index++) {
    console.log("x");
    if (index%5==0){
        console.log("");
    }
}


// Schleife von 0 bis 100
for (let i = 0; i <= 100; i++) {
    // Bedingung für die Ausgabe von "X" oder "O"
    if (i % 10 < 4) {
        process.stdout.write("X "); // Ausgabe von "X" gefolgt von einem Leerzeichen
    } else if (i % 10 < 8) {
        process.stdout.write("O "); // Ausgabe von "O" gefolgt von einem Leerzeichen
    } else {
        process.stdout.write("X"); // Ausgabe von "X" ohne Leerzeichen
    }

    // Bedingung für den Zeilenumbruch nach 10 Zeichen
    if (i % 10 === 9) {
        console.log(); // Zeilenumbruch
    }

    // Bedingung für das Beenden der Schleife nach 10 Zeichen
    if (i >= 10) {
        break; // Schleife beenden, nachdem 10 Zeichen ausgegeben wurden
    }
}



//2.
//Zähler verändern, um nur gerade Zahlen zu zählen
let sum = 0; // Variable für die Summe initialisieren

// Schleife von 2 bis 100 mit einer Schrittweite von 2 (nur gerade Zahlen)
for (let i = 2; i <= 100; i += 2) {
    sum += i; // Gerade Zahl zur Summe hinzufügen
}

console.log("Summe aller geraden Zahlen von 1 bis 100:", sum);





//Ansatz 2: Modulo verwenden, um gerade Zahlen zu identifizieren
let sum = 0; // Variable für die Summe initialisieren

// Schleife von 1 bis 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) { // Überprüfen, ob die Zahl gerade ist (Rest bei Division durch 2 ist 0)
        sum += i; // Gerade Zahl zur Summe hinzufügen
    }
}

console.log("Summe aller geraden Zahlen von 1 bis 100:", sum);

