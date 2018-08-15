
let a = prompt("Enter n array of numbers separated with a blank space");
let a2 = [] = a.split(" ");
let maxp = 0;
let n1 = 0;
let n2 = 0;

for (i = 0; i < a2.length; i++) {

    let p = a2[i] * a2[i + 1];
    if (p > maxp) {
        maxp = p;
        n1 = a2[i];
        n2 = a2[i + 1];
    }
}
console.log(`${n1} and ${n2} produce the largest product: ${maxp}`);



