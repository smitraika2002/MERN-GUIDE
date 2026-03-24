# Closures in JavaScript

## 📌 Introduction

Closures are one of the most important concepts in JavaScript, especially for beginners learning how functions work.

In simple words, a closure happens when a function remembers variables from its outer function, even after the outer function has finished running.

👉 A function keeps access to its parent variables.

## 🧠 Simple Idea

Think like this:

A function leaves its home, but it still carries a bag 🎒 of variables with it.

That “memory” is called a closure.

---
## ❓ Why do we use closures?

We use closures when we want:

to remember values between function calls
to store private data
to avoid using global variables
to create reusable functions

Closures help make code more clean and secure.

⏰ When do we use closures?

## Closures are useful when:

you need a function to keep state (memory)
you want to protect data (private variables)
you are working with callbacks or async code
you want to build custom reusable logic
📍 Where are closures used?

## Closures are used in many real-world JavaScript and MERN situations:

🔁 Event handlers (button clicks)
⏱️ Timers (setTimeout, setInterval)
🌐 API calls (async/await, promises)
⚛️ React (hooks and component logic)
🧩 Backend middleware
🛠️ Utility/helper functions
💡 Real-Life Example

## A counter button:

Each time you click, it increases the number and remembers the previous value.

👉 That memory is possible because of closures

⚠️ Common Beginner Mistake

 ## Many beginners think:

“Variables disappear after function ends” ❌

👉 But closures keep them alive in memory ✅

🎯 Interview Point

Closure =
👉 function + access to its outer scope

🧠 One-Line Summary
## A closure is when a function remembers and uses variables from its outer function even after it has finished running.