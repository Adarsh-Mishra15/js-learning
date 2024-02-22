// Arrays in javascript

const myArr = [0, 1, 2, 3, 4]

// javascript arrays in javascript are resizable

// javascript array-copy-operation create shallow copy(copy whose properties share the same reference)
// Deepcopy (do not share the same reference)

console.log(myArr);
console.log(typeof myArr);

const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr[1]);


// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

//myArr.unshift(9) // not optimize, add to the first
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(newArr);
// console.log(typeof newArr); // string
// console.log(myArr);


// slice : does not manipulate the original array

// console.log("A", myArr);
const myn1 = myArr.slice(1, 3) // start from index 1 to 2 (excludes 3)
    // console.log(myn1);
    // console.log("B", myArr);

// splice : manipulates the original array

const myn2 = myArr.splice(1, 3)
    // console.log("C", myArr);
    // console.log(myn2);