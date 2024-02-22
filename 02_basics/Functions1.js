// Functions and parameters



function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
    return (number1 + number2);
}

const sum = addTwoNumbers(10, 20)
    // console.log(`result is ${sum}`);

function loginUserMessage(username = "Guest") { // default arguments
    if (!username) { // !username is equals to (username === undefined)
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Adarsh"))
console.log(loginUserMessage()); // undefined if no parameter is given