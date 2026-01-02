const accountId = 1122
let accountEmail = "laypatel@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 123
// not allowed to change a constant

accountEmail = "hchc@hc"
accountCity = "bengaluru"
accountPassword = "121212"
console.log(accountId)
let accountState;
// console.log(accountCity)
//console.log(accountEmail)
//ek ek lakhva karta badhu ek hate b print karavai table na form ma
/* Prefer not to use var because of issue in block scope and 
functional scope. Use let keyword for variables */

console.table([accountId,accountCity, accountPassword, accountEmail, accountState])