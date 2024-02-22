// filter map

// const coding = ["js", "ruby", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);


//filter


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((nums)=>num>4)

// const newNums = myNums.filter((num) => {
//     return num > 4
// })


// const newNums = []
// myNums.forEach((num) => {
//         if (num > 4) {
//             newNums.push(num)
//         }
//     })
// console.log(newNums); // array of elements greater than 4

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Map

// const newnumbers = myNums.map((num) => num + 10)
const newnumbers = myNums.map((num) => { return num + 10 })

// console.log(newnumbers);

const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 40)

// console.log((newNums));

// Reduce

const myNumber = [1, 2, 3]
    // const myTotal = myNumber.reduce(function(acc, currval) {
    //     console.log(`acc: ${acc} and currval: ${currval}`);
    //     return acc + currval
    // }, 0)

// console.log(myTotal);


const myTotal = myNumber.reduce((acc, currval) => (acc + currval), 0)

// console.log(myTotal);

const shopping = [{
        coursename: "jscourse",
        price: 2999
    },

    {
        coursename: "python course",
        price: 7999
    },

    {
        coursename: "Data Scientist",
        price: 10999
    },

]

const newTotal = shopping.reduce((acc, item) => (acc + item.price), 0)
console.log(newTotal);