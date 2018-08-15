function exchangeNumbers(){
    let a=prompt("Enter the first number");
    let b=prompt("Enter the second number");
    let c;
    if (a > b) {
        c = a;
        a = b;
        b = c;
    }
    return (a + " " + b);
}

console.log(exchangeNumbers());

// Super, bas to so se barase