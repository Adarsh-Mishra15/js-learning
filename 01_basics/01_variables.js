const accountId = 144553
let accountEmail = "adarsh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // Never ever used this way
let accountState; //undefined

//accountId = 2   // not allowed

accountEmail = "dbfisbds@gmail.com"
accountPassword ="21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var, because of the issue of block scope and function scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])