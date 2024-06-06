// Funktion, um die Anzahl der Nukleotide A, C, G und T in einer DNA-Sequenz zu zählen
function countNucleotides(dnaSequence) {
  // Zähler für jedes Nukleotid initialisieren
  let countA = 0;
  let countC = 0;
  let countG = 0;
  let countT = 0;

  // Schleife durch jedes Zeichen in der DNA-Sequenz
  for (let i = 0; i < dnaSequence.length; i++) {
    let nucleotide = dnaSequence[i]; // Aktuelles Nukleotid
    // Erhöhe den entsprechenden Zähler basierend auf dem Nukleotid
    if (nucleotide === "A") {
      countA++;
    } else if (nucleotide === "C") {
      countC++;
    } else if (nucleotide === "G") {
      countG++;
    } else if (nucleotide === "T") {
      countT++;
    }
  }

  // Rückgabe der Zähler als leerzeichengetrennter String
  return countA + " " + countC + " " + countG + " " + countT;
}

// Beispielhafte Nutzung:
const input = "AACT"; // Beispielinput
const result = countNucleotides(input); // Funktion aufrufen und Ergebnis speichern
console.log(result); // Ergebnis ausgeben, sollte "2 1 0 1" sein
