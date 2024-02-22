// Objects
// singleton: when object created with constructor
// Object.create() // constructor
//object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Adarsh",
    "full name": "Adarsh Mishra",
    age: 25,
    [mySym]: "mykey1",
    country: "India",
    email: "adarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);  // remember it 

jsUser.email = "adarsh@chatgpt.gmail.com"
    // Object.freeze(jsUser)
jsUser.email = "adarsh@microsoft.gmail.com"
    // console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello Js User"); // this pointer to point the object
}

jsUser.greeting2 = function() {
        console.log(`Hello jsUser, ${this["full name"]}`);
    }
    //console.log(jsUser.greeting); //undefined

console.log(jsUser.greeting());
console.log(jsUser.greeting2()); // why undefined come along with