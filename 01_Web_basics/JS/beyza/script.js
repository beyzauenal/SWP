let randomNumberSmaller12 = 0;
let randomNumberGreater12 = 0;



    //Schleifenanzahl
    for (let i = 0; i < 10; i++) { 
    

    // Zufallszahl zwischen 5 und 15 generieren
    let randomNumber = Math.floor(Math.random() * 11) + 5; 


    //Zufallszahl ist größer als 12
    if (randomNumber > 12) {
        console.log(randomNumberGreater12);
        randomNumberGreater12++;


    //Zufallszahl ist kleiner oder gleich 12
    } else {
        console.log(randomNumberSmaller12);
        randomNumberSmaller12++;
    }
}


