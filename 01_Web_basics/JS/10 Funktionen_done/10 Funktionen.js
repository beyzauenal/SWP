//FUNKTIONEN

// DRY - Dont repeat yourself

function printMenu(name, age, place ){
    console.log("WIlkommen Beyza!"+ name + "! Your are " + age + "years old and come from" + place);
    console.log("drücke");
    console.log("1 für Start");
    console.log("2 für Statistik");
    console.log("3 für Ende");
}


function add(a,b){
    return a+b-17 *0,4;
}

printMenu("Beyza, 17, Lustenau");
printMenu("Max, 44, Dornbirn");

let result = add(4,7);
console.log(result);



//AUFGABE VON MIR


// Funktionen für grundlegende mathematische Operationen
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function supercalculation(a, b) {
    return (a + b) / 2 * a;
}

// Funktion zur Berechnung des Osterdatums
function printEasterDate(year) {
    // Algorithmus zur Berechnung des Osterdatums
    let N = year - 1900;
    let A = N % 19;
    let B = Math.floor((7 * A + 1) / 19);
    let M = (11 * A + 4 - B) % 29;
    let Q = Math.floor(N / 4);
    let W = (N + Q + 31 - M) % 7;
    let P = 25 - M - W;
    
    // Ostersonntag ist entweder der P. April (wenn P > 0) oder der (P + 31). März
    let easter_date;
    if (P > 0) {
        easter_date = `Ostersonntag ist der ${P}. April ${year}.`;
    } else {
        easter_date = `Ostersonntag ist der ${P + 31}. März ${year}.`;
    }
    
    console.log(easter_date);
}

// Beispielaufruf für die Funktion printEasterDate
printEasterDate(2024);
