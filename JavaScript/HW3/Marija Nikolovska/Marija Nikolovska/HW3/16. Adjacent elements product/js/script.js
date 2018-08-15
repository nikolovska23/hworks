
let a = prompt("Enter n array of numbers separated with a blank space");
let a2 = [] = a.split(" ");
let maxp = 0;
let n1 = 0;
let n2 = 0;

for (i = 0; i < a2.length-1; i++) {

    let p = a2[i] * a2[i + 1];
    if (p > maxp) {
        maxp = p;
        n1 = a2[i];
        n2 = a2[i + 1];
    }
}
console.log(`${n1} and ${n2} produce the largest product: ${maxp}`);


// Super e resenieto no, dali e potrebno da odis do krajot na nizata vo ovoj slucaj?



/*
Resenieto za 15tata zadaca:

let year = prompt(
    'Enter a year and find out what century that year belongs to'
);

function century(year) {
    return Math.ceil(year / 100);
}
alert(century(year));

Vo zadacata se barase da se presmeta vekot vo koj spagja godinata od inputot primer prv vek e od 1 godina do 100ta godina, vtor vek od 101 do 200
Math.ceil ni ovozmozuva da zaokruzuvame na pogolemoto.

Celta mi bese da ve nateram da gi istrazite gotovite funkcii od JavaScript da vidime sto se mozi da se iskoristi
*/
