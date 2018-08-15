function ifSymmetrical() {
    let n = prompt("Enter the length of the array");
    let a = [];
    for (i = 0; i < n; i++)
        a[i] = prompt("Enter a number you want in the array");
    let k;
    for (i = 0; i <= a.length / 2; i++) {
        if (a[i] != a[a.length - 1 - i])
            return false;
    }
    return true;

}
console.log(ifSymmetrical());

