// Scope

// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
        // var c = 30 // same as : c=30
        // console.log(`inner : ${a}`);
}

// global scope at browser is different as nodejs terminal

// console.log(`outer :${a}`);
// console.log(b);
// console.log(c);

function one() {
    const username = "Adarsh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error
    two()

}

// one()

if (true) {
    const username = "Adarsh"

    if (username === "Adarsh") {
        const website = " youtube"
            // console.log(username + website);
    }
    //console.log(website); // error
}
// console.log(username); // error


// ********************  interesting *******************

console.log(addone(5)) // throw no error

console.log(addTwo(5)) // ERROR: cannot access addTwo before initialization

function addone(num) {
    return num + 1
}



const addTwo = function(num) {
    return num + 2
}

// HOISTING: In simple terms, remember: functions with any declaration act like they're written at the top, while let and const don't have this magic trick. Use hoisting cautiously to avoid confusion!