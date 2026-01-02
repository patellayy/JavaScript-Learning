// two types ma categorize  kare
/* primitive and non primitive based on kevi rtie access thai and stoe thai memory ma */
//call by value and call by reference diff se aa bev uppar na ma

/*PRIMITIVE: ISME CALL BY VALUE USE HOTA HAI JAB BHI ISE KAHI SE KAHI 
 COPY KARTE HAI TOH INKA JO ORIGINAL MEMEORY REF NHI DETA COPY KARKE DETA HAI
 aur usme app changes karte ho woh copy me change hota hai
/* TYPES 7: 
1. String 
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
*/
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
 const bigNumber = 3456789456784645465n

/* NON PRIMITIVE : CALL BY REFERENCE
TYPES: Arrays, Objects */

const heros = ["lay", "meet", "ayush"];
let myObj = {
    name:"lay",
    age:21,
}

const myFunction  =  function()
{
    console.log("hello world")
}
console.log(typeof bigNumber)