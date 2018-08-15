// -Checks by position

function largerThan() {
    let a = prompt("Enter an array of numbers separated with a blank space");
    let a2 = [] = a.split(" ");
    let n = prompt("Enter a number of a position in the array");

    for (i = 0; i < a2.length; i++) {
        if (i == n) {
            if (a2[i] > a2[i + 1] && a2[i] > a2[i - 1])
                return true;
            else return false;
        }

    }
}

console.log(largerThan());




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


