//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myObj);
console.log(typeof outsideTemp);
console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




//........................................................
// Stack(primitive), Heap(Non-primitive)
let myYouTubeChannel="abcdotcom"
let anotherChannel=myYouTubeChannel
anotherChannel="xyz123";
console.log(myYouTubeChannel);
console.log(anotherChannel);
let userOne={
    email:"userOne@Goole.com",
    upi:"obc@ybl"
}
let userTwo=userOne
userTwo.email="abcabc@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
