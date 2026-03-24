function outer() {
  // count is created inside outer function
  let count = 0;

  function inner() {
    // inner function can use count from outer function
    count++;

    // print updated value
    console.log(count);
  }

  // return inner function
  return inner;
}

// outer() runs and returns inner function
const counter = outer();

// every time we call counter(),
// it still remembers the same count variable
counter(); // output: 1
counter(); // output: 2
counter(); // output: 3