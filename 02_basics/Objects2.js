// Objects

// const tinderUser = new Object() // singleton Object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Adarsh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
        email: "adarsh@google.com",
        fullname: {
            userfullname: {
                firstname: "Adarsh",
                lastname: "Mishra"
            }
        }

    }
    // console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj4 = {
    5: "e",
    6: "f"
}

//const obj3 = Object.assign({}, obj1, obj2, obj4) // static method, copies the all the enumerables, // Object.assign(target, source)

const obj3 = {...obj1, ...obj2 } //spread operator
    // console.log(obj3);

const users = [{
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    }
]

// console.log(tinderUser);
// console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));