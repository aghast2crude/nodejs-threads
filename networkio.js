const https = require("node:https");

const MAX_CALLS = 4;

const startDate = Date.now();

// Understanding libuv
// Although both pbkdf and https.request are asynchronous, https.request does not seem to use thread pool
// https.request does not seem to be affected by number of CPU cores either.
// because https.request is a network input/output operation and not a CPU bound operation.
// It does not use the thread pool
// libuv instead delegates the work to the operation system kernel and whenever possible, it will poll the kernel and see if the request has completed

// In nodejs, async methods are handled by libuv.
// They are handled in 2 ways.
// 1. Native async mechanisms   2. Thread pool
// Whenever possible, libuv will use native async mechanisms in the OS so as to avoid blocking the main thread.
// since this is part of the OS kernel, there is different mechanism for each OS. we have epoll for linux, kqueue for Mac and IO Completion port for Windows
// Relying on native async mechanisms makes node scalable as the only limitation is the operating system kernel
// Example of this type is network I/O operation
// If there is no native async support and the task I/O or CPU intensive, libuv uses main thread pool to avoid blocking the main thread
// Although the thread pool preserves asynchronisity with respect to Node's main thread, it can still become a bottleneck if all threads are busy

for (let i = 0; i <= MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request ${i + 1}`, Date.now() - startDate);
      });
    })
    .end();
}
