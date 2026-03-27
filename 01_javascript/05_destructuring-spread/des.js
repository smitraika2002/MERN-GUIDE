// 1️⃣ OBJECT DESTRUCTURING
// ==========================================

// 👉 Object = key-value pair

const user = {
  name: "Smit",
  age: 22,
  country: "USA"
};

// ❌ OLD WAY (long)
const userName = user.name;
const userAge = user.age;

// ✅ NEW WAY (destructuring)
const { name, age } = user;

console.log("OBJECT DESTRUCTURING:", name, age);
// Output: Smit 22


// ==========================================
// 2️⃣ RENAME VARIABLES
// ==========================================

// You can rename variables

const { name: userName2 } = user;

console.log("RENAME:", userName2);
// Output: Smit


// ==========================================
// 3️⃣ DEFAULT VALUES
// ==========================================

// If value doesn't exist, give default

const { city = "Omaha" } = user;

console.log("DEFAULT VALUE:", city);
// Output: Omaha


// ==========================================
// 4️⃣ ARRAY DESTRUCTURING
// ==========================================

const numbers = [10, 20, 30];

// Take values by position

const [first, second] = numbers;

console.log("ARRAY DESTRUCTURING:", first, second);
// Output: 10 20


// ==========================================
// 5️⃣ SKIP VALUES
// ==========================================

// Skip items using comma

const [a, , c] = numbers;

console.log("SKIP:", a, c);
// Output: 10 30


// ==========================================
// 6️⃣ REST OPERATOR (...)
// ==========================================

// Collect remaining values

const [x, ...rest] = numbers;

console.log("REST:", x, rest);
// Output: 10 [20, 30]


// ==========================================
// 7️⃣ DESTRUCTURING IN FUNCTION (VERY IMPORTANT)
// ==========================================

// Without destructuring
function printUser(user) {
  console.log(user.name);
}

// With destructuring (clean code)
function printUser2({ name, age }) {
  console.log("FUNCTION:", name, age);
}

printUser2(user);


// ==========================================
// 8️⃣ NESTED DESTRUCTURING
// ==========================================

const person = {
  name: "Smit",
  address: {
    city: "Omaha",
    zip: 68102
  }
};

// Extract nested values

const {
  address: { city: userCity }
} = person;

console.log("NESTED:", userCity);
// Output: Omaha


// ==========================================
// 🚀 REAL MERN / REACT EXAMPLE
// ==========================================

// Example: React props

const props = {
  title: "My App",
  user: "Smit"
};

// Instead of props.title, props.user

const { title, user: userName3 } = props;

console.log("REACT STYLE:", title, userName3);


// ==========================================
// 🎯 FINAL SUMMARY
// ==========================================

// Object → { }
// Array → [ ]

// Destructuring = extract values easily

// 👉 Used everywhere in React + APIs + backend
