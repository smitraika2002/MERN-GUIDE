// 1️⃣ GLOBAL SCOPE
// ==========================================

// In global scope, "this" refers to global object

console.log("GLOBAL THIS:", this);
// In browser → window
// In Node → {} (empty object)


// ==========================================
// 2️⃣ INSIDE OBJECT (MOST IMPORTANT)
// ==========================================

const user = {
  name: "Smit",

  greet: function () {
    console.log("Hello,", this.name);
  }
};

user.greet();
// Output: Hello, Smit

// 👉 "this" refers to the object (user)


// ==========================================
// 3️⃣ WRONG WAY (common mistake)
// ==========================================

const user2 = {
  name: "Smit",

  greet: function () {
    function inner() {
      console.log("WRONG:", this.name);
    }
    inner();
  }
};

user2.greet();
// Output: undefined

// ❗ because "this" is lost inside inner function


// ==========================================
// 4️⃣ FIX USING ARROW FUNCTION
// ==========================================

const user3 = {
  name: "Smit",

  greet: function () {
    const inner = () => {
      console.log("FIXED:", this.name);
    };
    inner();
  }
};

user3.greet();
// Output: Smit

// 👉 arrow function takes "this" from parent


// ==========================================
// 5️⃣ IN REGULAR FUNCTION
// ==========================================

function show() {
  console.log("FUNCTION THIS:", this);
}

show();

// 👉 in Node → undefined
// 👉 in browser → window


// ==========================================
// 6️⃣ IN EVENT (VERY COMMON IN REACT/DOM)
// ==========================================

// Imagine button click

const button = {
  text: "Click me",

  click: function () {
    console.log("BUTTON:", this.text);
  }
};

button.click();
// Output: Click me


// ==========================================
// 7️⃣ CALL / APPLY / BIND (ADVANCED - IMPORTANT)
// ==========================================

const person1 = {
  name: "Smit"
};

const person2 = {
  name: "Ram"
};

function sayHello() {
  console.log("Hello", this.name);
}

// call() → manually set "this"
sayHello.call(person1); // Hello Smit
sayHello.call(person2); // Hello Ram


// ==========================================
// 8️⃣ CONSTRUCTOR FUNCTION
// ==========================================

function User(name) {
  this.name = name;
}

const u1 = new User("Smit");

console.log("CONSTRUCTOR:", u1.name);
// Output: Smit

// 👉 "this" refers to new object


// ==========================================
// 🎯 FINAL SUMMARY
// ==========================================

// "this" depends on HOW function is called

// object method → this = object
// arrow function → no own this (takes from parent)
// normal function → global/undefined
// constructor → new object
// call/apply → manually set this
