console.log("Start"); 
// Goes to call stack → prints immediately

setTimeout(() => {
  console.log("Timeout");
}, 0);
// Sent to Web API → then goes to callback queue

Promise.resolve().then(() => {
  console.log("Promise");
});
// Goes to microtask queue (HIGH PRIORITY)

console.log("End");
// Runs immediately