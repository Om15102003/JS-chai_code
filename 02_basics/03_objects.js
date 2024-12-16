// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    "name": "Om",
    "full name": "Om Gupta",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "om@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
console.log(JsUser.name);


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
console.log(JsUser.greetingTwo());