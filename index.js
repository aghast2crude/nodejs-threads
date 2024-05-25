const fs = require("node:fs");
const crypto = require("node:crypto");
// console.log("First");

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   console.log("contents inside", data);
// });

// console.log("last");

//pbkdf2Sync method runs in the main thread, blocking the main thread
const startDate = Date.now();
// const res = crypto.pbkdf2Sync("secret", "salt", 1000000, 512, "sha512");
// console.log("ppr", Date.now() - startDate);
// console.log("hashed str", res.toString("hex"));

// If this for loop is run synchronously it takes 'n' times the time of the first response time
const max_iterations = 3;
for (let i = 0; i < max_iterations; i++) {
  //   crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, data) => {
  //     console.log("after hashing", data.toString("hex"));
  //     console.log(Date.now() - startDate);
  //   });
  const res = crypto.pbkdf2Sync("secret", "salt", 100000, 512, "sha512");
  console.log(Date.now() - startDate);
}
