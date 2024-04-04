//Schritt 1: Schleife erstellen, um Zahlen von 1 bis 222 zu iterieren

//Schritt 2: Überprüfen Sie, ob die aktuelle Zahl ein Vielfaches von sowohl 5 als auch 7 ist.


//Schritt 3: Wenn ja, drucken Sie "FooBar".


//Schritt 4: Überprüfen Sie, ob die aktuelle Zahl ein Vielfaches von 5 ist, aber kein Vielfaches von 7.


//Schritt 5: Wenn ja, drucken Sie "Foo".


//Schritt 6: Überprüfen Sie, ob die aktuelle Zahl ein Vielfaches von 7 ist, aber kein Vielfaches von 5.


//Schritt 7: Wenn ja, drucken Sie "Bar".


//Schritt 8: Wenn keines der obigen Bedingungen erfüllt ist, drucken Sie einfach die aktuelle Zahl.
//Iteriere über die Zahlen von 1 bis 222
for (i in range(1, 223));
//Überprüfe, ob die aktuelle Zahl ein Vielfaches von sowohl 5 als auch 7 ist
    if (i % 5 == 0 & i % 7 == 0);
        print("FooBar")
    // Überprüfe, ob die aktuelle Zahl ein Vielfaches von 5 ist, aber kein Vielfaches von 7
    else if (i % 5 == 0);
        print("Foo")
    //Überprüfe, ob die aktuelle Zahl ein Vielfaches von 7 ist, aber kein Vielfaches von 5
    else if (i % 7 == 0);
        print("Bar")
    //Wenn keines der obigen Bedingungen erfüllt ist, drucke einfach die aktuelle Zahl
    else; print(i)
