function largerNumber(a, b) {
    let larger;
    if (a > b)
        larger = a;
    else
        larger = b;

    return larger;
}


function theLargest() {
    let max;
    let firstNumber = prompt("Enter the first number");
    let secondNumber = prompt("Enter the second number");
    let thirdNumber = prompt("Enter the third number");
    let fourthNumber = prompt("Enter the fourth number");
    let fifthNumber = prompt("Enter the fifth number");

    max = largerNumber(firstNumber, secondNumber);
    max = largerNumber(max, thirdNumber);
    max = largerNumber(max, fourthNumber);
    max = largerNumber(max, fifthNumber);

    // Na prethodnata zadaca ti komentirav za reiskoristuvanje na kod a vo ovaa veke si se popravila, Great Job! :)
    // Bravos za out of the box razmisluvanjeto :)) trebase so maksimum 5 if da se resi, ti imas teoretski 1 if, fakticki 4, kako i da gledas pomalku od 5 :))
    // dolu imam zakomentirano uste eden nacin na reiskoristuvanje na kod, mozebi ne e najdobro za nasiov primer zaradi citlivost na kod 
    // no za edno do dve nivoa na rekurzivnost moze i vakvo nesto da se koristi
    // max = largerNumber(largerNumber(largerNumber(firstNumber, secondNumber), largerNumber(thirdNumber, fourthNumber)), fifthNumber)
    return max;
}

console.log("The largest number is " + theLargest());