// let score = "33"
// let score = "abc" or "33abc"
// let score = null
// let score = undefined
let score = true

console.log(typeof score)
console.log(typeof (score))  
// above both are same diff ways to write se khali
 let valueInNumber  = Number(score)
 console.log(typeof valueInNumber)
 console.log(valueInNumber)
  //"33abc" gives string, number and NaN
  //null gives object,  number aand 0
  //undefined gives undefined, number and NaN
  //boolean =>true or false gives boolean, number and 0 or 1

  let isLoggedIn = 1;
  console.log(typeof isLoggedIn)
  let booleanLoggedIn = Boolean(isLoggedIn)
  console.log(typeof booleanLoggedIn)
  console.log(booleanLoggedIn)

  // 1 gives number, boolean adn true
  // 0 gives number, boolean and false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// 33 gives 33, string
