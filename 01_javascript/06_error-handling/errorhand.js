// ==========================================
// 📦 JAVASCRIPT ERROR HANDLING (BEGINNER GUIDE)
// ==========================================


// ==========================================
// 1️⃣ TRY...CATCH (MOST IMPORTANT)
// ==========================================

// try = run code
// catch = run if error happens

try {
  // ❌ this will cause error (y is not defined)
  console.log(y);
} catch (error) {
  // this runs instead of crashing app
  console.log("ERROR CAUGHT:", error.message);
}

console.log("Program continues...");


// ==========================================
// 2️⃣ FINALLY (ALWAYS RUNS)
// ==========================================

try {
  console.log("Trying something...");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("FINALLY: always runs");
}


// ==========================================
// 3️⃣ THROW (CREATE YOUR OWN ERROR)
// ==========================================

function checkAge(age) {
  if (age < 18) {
    // manually throw error
    throw new Error("You must be 18+");
  }
  return "Access granted";
}

try {
  console.log(checkAge(16));
} catch (error) {
  console.log("CUSTOM ERROR:", error.message);
}


// ==========================================
// 4️⃣ ERROR TYPES (BASIC)
// ==========================================

// ReferenceError → variable not defined
// TypeError → wrong type
// SyntaxError → wrong syntax (won’t run at all)

try {
  null.f(); // TypeError
} catch (error) {
  console.log("TYPE ERROR:", error.message);
}


// ==========================================
// 5️⃣ ASYNC ERROR HANDLING (VERY IMPORTANT)
// ==========================================

// Example: fake API call

function fetchData() {
  return new Promise((resolve, reject) => {
    let success = false;

    if (success) {
      resolve("Data received");
    } else {
      reject("Failed to fetch data");
    }
  });
}


// ==========================================
// 6️⃣ .then / .catch
// ==========================================

fetchData()
  .then((data) => {
    console.log("SUCCESS:", data);
  })
  .catch((error) => {
    console.log("PROMISE ERROR:", error);
  });


// ==========================================
// 7️⃣ ASYNC / AWAIT (MODERN WAY)
// ==========================================

async function getData() {
  try {
    const data = await fetchData();
    console.log("ASYNC SUCCESS:", data);
  } catch (error) {
    console.log("ASYNC ERROR:", error);
  }
}

getData();


// ==========================================
// 🚀 REAL MERN BACKEND EXAMPLE (IMPORTANT)
// ==========================================

// Example: Express-style handler

function getUser(req) {
  try {
    // imagine database call
    if (!req.id) {
      throw new Error("User ID missing");
    }

    return { id: req.id, name: "Smit" };
  } catch (error) {
    return { error: error.message };
  }
}

console.log(getUser({ id: 1 }));
console.log(getUser({}));


// ==========================================
// 🎯 FINAL SUMMARY
// ==========================================

// try → test code
// catch → handle error
// finally → always run
// throw → create error

// async → use try/catch OR .catch()

// 👉 prevents app crash