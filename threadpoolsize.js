const crypto = require("node:crypto");

// To increase the libuv thread pool size
process.env.UV_THREADPOOL_SIZE = 5; // or 'export UV_THREADPOOL_SIZE=5' in the cmd
// When the iteration is increased more than 4, the result takes twice the time of the first one.
// Like it is basically waiting for the thread to empty the callstack. So, next fn can execute
const startDate = Date.now();
const max_iterations = 5;
for (let i = 0; i < max_iterations; i++) {
  crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, data) => {
    // console.log("after hashing", data.toString("hex"));
    console.log(Date.now() - startDate);
  });
  //   const res = crypto.pbkdf2Sync("secret", "salt", 100000, 512, "sha512");cl
}
