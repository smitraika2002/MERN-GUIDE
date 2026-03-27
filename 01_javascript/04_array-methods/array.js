// ==========================================
// 📦 JAVASCRIPT ARRAY METHODS (BEGINNER GUIDE)
// ==========================================

// 👉 An array is just a list of items
const numbers = [1, 2, 3, 4, 5];


// ==========================================
// 1️⃣ MAP → change each item
// ==========================================

// map() goes through each item and returns a NEW array
// It does NOT change original array

const doubled = numbers.map((num) => {
  return num * 2; // multiply each number by 2
});

console.log("MAP (doubled):", doubled);
// Output: [2, 4, 6, 8, 10]


// ==========================================
// 2️⃣ FILTER → select some items
// ==========================================

// filter() keeps only items that match condition

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0; // keep only even numbers
});

console.log("FILTER (even):", evenNumbers);
// Output: [2, 4]


// ==========================================
// 3️⃣ REDUCE → combine into one value
// ==========================================

// reduce() turns array into a single value

const sum = numbers.reduce((total, num) => {
  return total + num; // keep adding numbers
}, 0); // 0 = starting value

console.log("REDUCE (sum):", sum);
// Output: 15


// ==========================================
// 4️⃣ FOREACH → loop through array
// ==========================================

// forEach() just runs code for each item
// It DOES NOT return anything

numbers.forEach((num) => {
  console.log("FOREACH:", num);
});


// ==========================================
// 5️⃣ FIND → find first matching item
// ==========================================

const users = [
  { name: "Smit", active: true },
  { name: "Ram", active: false },
  { name: "Hari", active: true }
];

const foundUser = users.find((user) => {
  return user.name === "Ram"; // find Ram
});

console.log("FIND:", foundUser);
// Output: { name: "Ram", active: false }


// ==========================================
// 6️⃣ SOME → check if ANY item matches
// ==========================================

const hasEven = numbers.some((num) => {
  return num % 2 === 0; // check if any even number exists
});

console.log("SOME (has even?):", hasEven);
// Output: true


// ==========================================
// 7️⃣ EVERY → check if ALL items match
// ==========================================

const allPositive = numbers.every((num) => {
  return num > 0; // check if all numbers > 0
});

console.log("EVERY (all positive?):", allPositive);
// Output: true


// ==========================================
// 8️⃣ PUSH / POP → add/remove from END
// ==========================================

const arr1 = [1, 2];

// push() adds item at end
arr1.push(3);
console.log("PUSH:", arr1); // [1, 2, 3]

// pop() removes last item
arr1.pop();
console.log("POP:", arr1); // [1, 2]


// ==========================================
// 9️⃣ SHIFT / UNSHIFT → add/remove from START
// ==========================================

const arr2 = [2, 3];

// unshift() adds item at beginning
arr2.unshift(1);
console.log("UNSHIFT:", arr2); // [1, 2, 3]

// shift() removes first item
arr2.shift();
console.log("SHIFT:", arr2); // [2, 3]


// ==========================================
// 🔟 INCLUDES → check if value exists
// ==========================================

const arr3 = [1, 2, 3];

const hasTwo = arr3.includes(2);

console.log("INCLUDES (has 2?):", hasTwo);
// Output: true


// ==========================================
// 🚀 REAL MERN EXAMPLE
// ==========================================

// Imagine this comes from database (MongoDB)

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

// Get only expensive products (> 400)

const expensiveProducts = products.filter((product) => {
  return product.price > 400;
});

console.log("EXPENSIVE PRODUCTS:", expensiveProducts);


// ==========================================
// 🎯 FINAL TIP
// ==========================================

// map → change
// filter → select
// reduce → combine

