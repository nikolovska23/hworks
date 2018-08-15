
let a = prompt("Enter an array of floating-point numbers as strings separated with a blank space");


let a2 = [] = a.split(" ");

for (i = 0; i < a2.length; i++) {
    a2[i] = parseFloat(a2[i]);
}

console.log(a2);

function findMinimal() {
    let min = Infinity;
    for (i = 0; i < a2.length; i++)
        if (a2[i] < min)
            min = a2[i];
    return min;
}


function findMaximal() {
    let max = -Infinity;
    for (i = 0; i < a2.length; i++)
        if (a2[i] > max)
            max = a2[i];
    return max;
}

function calculateSum() {
    let sum = 0;
    for (i = 0; i < a2.length; i++)
        sum += a2[i];
    return sum;
}


function calculateAverage() {
    let av = calculateSum(a2) / a2.length;
    return av;
}

console.log(`Min is ${findMinimal(a2).toFixed(2)}, max is ${findMaximal(a2).toFixed(2)}, sum is ${calculateSum(a2).toFixed(2)}, average is ${calculateAverage(a2).toFixed(2)}`);

// Odlicno sraboteno, dobias bonus poeni za reiskoristuvanjeto na funkciite :)