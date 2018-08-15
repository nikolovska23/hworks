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

    return max;
}

console.log("The largest number is " + theLargest());