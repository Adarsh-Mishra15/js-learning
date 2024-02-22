//

function calculateCartPrice(val1, val2, ...num1) { // rest operator(spread operator)
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 600, 800))

const user = {
    username: "Adarsh",
    price: 99,
}

function handleoObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleoObject(user)

// handleoObject({ username: "Mahesh", price: 399 })


const myNewArray = [200, 400, 500]

function handleArray(arr) {
    console.log(`first element is ${arr[0]}`);
}

// handleArray(myNewArray)

handleArray([500, 500, 200])