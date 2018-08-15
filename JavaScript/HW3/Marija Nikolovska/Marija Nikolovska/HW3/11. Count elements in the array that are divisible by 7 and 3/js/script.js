
let a = prompt("Enter an array of numbers separated with a blank space");
let a2 = [] = a.split(" ");
let j = 0;
for (i = 0; i < a2.length; i++) {

    if ((a2[i] % 7 == 0) && (a2[i] % 3 == 0))
        j++;
}

console.log(`There are ${j} elements in the array divisible by 7 and 3`);

// uste edna tocna :)