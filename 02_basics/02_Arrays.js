const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) // dc_heros array in marvek_heros array
// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operator

const all_new_heros = [...marvel_heros, ...dc_heros] // ... means individual elements
    // console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //returns a new array with all sub-array elements concatenated into it recursively up to  the specified depth
    // console.log(real_another_array);

console.log(Array.isArray("Adarsh"))
console.log(Array.from("Adarsh")) // convert it into array of characters
console.log(Array.from({ name: "Adarsh" })); // interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));