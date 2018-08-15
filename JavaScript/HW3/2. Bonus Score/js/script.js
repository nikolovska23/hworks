
function validUserInput() {
    let input = prompt("Enter a score between 1-9");
    while (isNaN(input)) {
        input = prompt("The value you entered \"" + input + "\" is not a number.\nPlease enter a valid number!");
    }
    while (input < 1 || input > 9) {
        input = prompt("The number you entered is out of the range.\nPlease enter a number between 1-9");
    }
    return input;
}



function bonusScore() {
    let score = validUserInput();
    if (score > 1 || 3 > score)
        score *= 10;
    else if (score > 4 || 6 > score)
        score *= 100;
    else if (score > 7 || 9 > score)
        score *= 1000;

    return score;

}



