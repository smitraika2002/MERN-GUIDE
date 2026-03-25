// async code
console.log("Start");

setTimeout(() => {
  console.log("Task done");
}, 2000);

console.log("End");

// A Promise is a special object that represents a result that will come later.

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

// 📌 3. Using Promise (.then / .catch)

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  
// 👉 Easier/Modern way to use Promises
async function runTask() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

runTask();