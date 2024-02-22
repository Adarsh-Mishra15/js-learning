const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Do not have user email");
}


// falsy values

// false, 0, -0,BigInt: 0n, "", null, undefined, NaN

// truthy values

//  true, any non-zero number or BigInt except for 0 and NaN, empty string ("") ,"0","false"," ", [],{}, function(){}

if (userEmail.length === 0) {
    // console.log("Array is empty");
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    // console.log("Object is Empty");
}


// nullish coalescing operator: used to hadle null and undefined

// let val1;
// val1 = 10 ?? 20  // 10
// val1 = null ?? 10 //10
// val1 = undefined ?? 10 //10
// // val1 = undefined ?? null ?? 10 ?? 20  //10
// console.log(val1);