// -Checks by position

function largerThan() {
    let a = prompt("Enter an array of numbers separated with a blank space");
    let a2 = [] = a.split(" ");
    let n = prompt("Enter a number of a position in the array");
    let f;

    for (i = 0; i < a2.length; i++) {
        if (i == n) {
            if (i == 0) {
                if (a[i] > a[i + 1])
                    f = 1;
                else f = 0;
            }
            if (i == a2.length-1) {
                if (a[i] > a[i - 1])
                    f = 1;
                else f = 0;
            }
            if (a2[i] > a2[i + 1] && a2[i] > a2[i - 1])
                f = 1;
            else f = 0;

            return f;
        }

    }
}

console.log(largerThan());




// Prvo, n treba da bidi element vo nizata ne index :) vtoro, so ako elementot e na pocetokot ili na krajot na nizata? ako vo toj slucaj negoviot edinstven sosed e pomal
// sto ke se dobie vo konzola? True ili False?



// - Checks by number


// function largerThan(){
// let a = prompt("Enter an array of numbers separated with a blank space");
// let a2 = [] = a.split(" ");
// let n=prompt("Enter a number contained in the array");

// for(i=0; i<a2.length; i++ ){
//     if(a2[i]==n){
//         if(a2[i]>a2[i+1] && a2[i]>a2[i-1])
//         return true;
//         else return false;
//     }

// }
// }

// console.log(largerThan());


