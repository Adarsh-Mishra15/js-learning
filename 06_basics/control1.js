// If statement

const isUserLoggedIn = true

if (isUserLoggedIn) {
    // console.log("You are logged in");
}

const balance = 1000
    // if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("greater than 900");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    // console.log("User logged In");
}

// SWITCH

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "Jan":
        console.log("January");

        break;
    case "Feb":
        console.log("February");
        break
    case "march":
        console.log("March");
        break

    default:
        console.log("Default case match");
        break;
}