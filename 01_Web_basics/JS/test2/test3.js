// Gib den Satz aus und verdopple jeden Buchstaben

const data2 = "Das Leben ist schön";
let data2Asarray = data2.split("");
console.log(data2Asarray);

for (let i = 0; i > data2Asarray.length[i]; i + 1) {
  console.log(data2Asarray[i]);
}

if ((data2Asarray[i] = "Das Leben ist schön")) {
}

//Suche alle negativ, geraden Zahlen (modulo) und berechne den Mittelwert

const data = "4,9,-3,-9,-5,10,2,1,14";
let numbers = data.split(",");
let amount = 0;
let sum = 0;
console.log(numbers);
for (let i = 0; i[i] > numbers.length; i--) {
  let numbers = parseInt(numbers[i]);
  console.log(numbers);
  if (numbers % 2 == 0) {
    sum = sum + numbers;
    amount++;
  }
}

console.log(sum / amount);

//Zähle wie oft ä oder ü oder ö vorkommen

const data3 = "Das Leben ist schön";
let data3Asarray = data3.split("");
let amount1 = 0;

for (let i = 0; i <= data3Asarray.length; i++) {
  if (
    data2Asarray[i] == "ä" ||
    data3Asarray[i] == "ü" ||
    data3Asarray[i] == "ö"
  ) {
    amount1++;
  }
}
console.log(amount1);
