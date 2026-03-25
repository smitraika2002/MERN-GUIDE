📘 Event Loop in JavaScript
📌 What is the Event Loop?

The Event Loop is the mechanism that allows JavaScript to handle asynchronous tasks even though it is single-threaded.

👉 In simple words:
JavaScript can do one thing at a time, but the event loop helps it handle multiple tasks without blocking.

🧠 Core Idea (Easy Way)

Think like this:

JavaScript = a chef 👨‍🍳
Tasks = cooking orders
Event Loop = the manager deciding what to do next

👉 If something takes time (like fetching data), the chef doesn’t wait — he moves to the next task.

⚙️ Main Parts
1. Call Stack
Where code runs
Executes functions one by one
2. Web APIs (Browser/Node)
Handles async tasks like:
setTimeout
fetch
DOM events
3. Callback Queue (Task Queue)
Stores completed async callbacks
4. Microtask Queue
Higher priority queue
Includes:
Promise.then()
async/await
5. Event Loop
Checks:
👉 “Is call stack empty?”
👉 If yes → pushes tasks from queues to stack
🔁 How It Works (Step-by-Step)
Run synchronous code (goes to call stack)
Async task goes to Web API
When done → goes to queue
Event loop checks stack
If empty → moves task to stack

👉 Microtasks run before normal tasks

❓ Why Do We Need Event Loop?

Without event loop:

JavaScript would freeze while waiting
No smooth UI
No async operations

👉 Example:

Loading data from server
Waiting for user click
Timers
⏰ When Do We Use It?

You use it whenever you write:

setTimeout()
setInterval()
fetch()
Promise
async/await
Event listeners (click, scroll)

👉 Basically: any async code uses the event loop