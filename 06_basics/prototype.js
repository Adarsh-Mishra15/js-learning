// Goal: 

let myName = "Adarsh    "

// console.log(myName.length);

String.prototype.truelength = function() {
    return (this.trim().length);

}

// console.log(myName.truelength());
// console.log("hitesh  ".truelength());
// console.log("chai  ".truelength());



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function() {
    console.log("Adarsh is present in all objects");
}

Array.prototype.heyAdarsh = function() {
    console.log(`Adarsh says hello`);
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyAdarsh()
    // heroPower.heyAdarsh()

// Inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makevideo: true
}

const teachingSupport = {
    isAvaialable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    __proto__: teachingSupport
}

teacher.__proto__ = user


// Modern Syntax: Inheritance

Object.setPrototypeOf(teachingSupport, teacher)