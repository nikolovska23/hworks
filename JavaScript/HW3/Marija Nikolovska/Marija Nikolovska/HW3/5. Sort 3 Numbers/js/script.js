function sortNumbers() {
    let a = prompt("Enter a number");
    let b = prompt("Enter a number");
    let c = prompt("Enter a number");
    let first, second, third;

    if (a > b && b > c) {
        first = a;
        second = b;
        third = c;
    }
    else if (a > c && c > b) {
        first = a;
        second = c;
        third = b;
    }

    else if (b > a && a > c) {
        first = b;
        second = a;
        third = c;
    }
    else if (b > c && c > a) {
        first = b;
        second = c;
        third = a;
    }
    else if (c > b && b > a) {
        first = c;
        second = b;
        third = a;
    }

    else if (c > a && a > b) {
        first = c;
        second = a;
        third = b;
    }


    console.log(` The largest is ${first}, then comes ${second} and the last is ${third}`);
}

sortNumbers();

// Odlicno