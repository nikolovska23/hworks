function inputArray() {
    let n = prompt("Enter the length of the array");
    let a = [];
    for (i = 0; i < n; i++) {
        a[i] = prompt("Enter a number you want in the array");
    }
    return a;

}


function lengthOfMaxSequence() {
    let a = inputArray();

    let maxj = 0;
    let j = 0;
    for (i = 0; i < a.length; i++) {

        if (a[i] == a[i - 1]) {
            j++

            if (j > maxj)
                maxj = j;
        }
        else j = 1;

    }
    return maxj;
}
console.log(lengthOfMaxSequence());

function lengthOfMaxIncreasingNs() {
    let a = inputArray();
    let j = 0;
    let maxj = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            j++;
            if (j > maxj)
                maxj = j;
        }
        else j = 1;

    }
    return maxj;
}

console.log(lengthOfMaxIncreasingNs());