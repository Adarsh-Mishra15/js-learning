// High order loops

// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num) // 1 2 3 4 5 (values)
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(greet)
}

// Maps : unique key value members

const map = new Map()


map.set("name", "Adarsh")
map.set("age", 22)
map.set("name", "Adarsh")

// console.log(map.get("name")) // John

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ':-', value);

}

// const myObj = {
//     'game1': "NFS",
//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObj) { // myObj is not iterable
//    console.log(key, value); // Error

// }

const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by app"
}

// for in

for (const key in myObj) {
    // console.log(`${key} shortcut for ${myObj[key]}`);
}

const programming = ["java", "cpp", "javascript"]

for (const key in programming) {
    // console.log(programming[key]); //
}

// for (const key in map) { // map is not iterable
//     console.log(key); 
// }


// for each

const coding = ["js", "ruby", "java", "python"]

coding.forEach(function(val) {
    // console.log(val);
})

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [{
    langaugeName: "Javascript",
    lnaguagefilename: "js"
}, {
    langaugeName: "java",
    lnaguagefilename: ".java"
}]

myCoding.forEach((item) => {
    console.log(item.langaugeName);
})