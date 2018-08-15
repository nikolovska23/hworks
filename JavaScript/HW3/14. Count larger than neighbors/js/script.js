function largerThanNeighbors() {

    let a = prompt("Enter an array of numbers as strings separated with a blank space");
    let a2 = [] = a.split(" ");
    let j = 0;

    if (a2[0] > a2[1])
        j++;
    if (a2[a2.length - 1] > a2[a2.length - 2])
        j++;

    for (i = 1; i < a2.length - 1; i++) {

        if (a2[i] > a2[i + 1] && a2[i] > a2[i - 1])
            j++;
    }
    return j;
}

console.log(largerThanNeighbors());