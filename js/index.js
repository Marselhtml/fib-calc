let number = parseInt(prompt("Enter Fibonacci number"));
while (Number.isNaN(number)) {
    alert("You have to enter a number");
    let number = parseInt(prompt("Enter Fibonacci number"));
}

function fibonacci(number) {
    if (number <= 2) {
        return 1;
    }else{

    return fibonacci(number - 1) + fibonacci(number - 2);
}
}

alert(fibonacci(number));