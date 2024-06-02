const fs = require("node:fs");
const { text } = require("stream/consumers");

// fs.readFile("./test.txt", () => {
//   console.log("this is readfile 1");
// });

setTimeout(() => {
  console.log("This is setTimeout Timer");
}, 0);

fs.readFile(__filename, () => {
  console.log("This is fs running");
});

process.nextTick(() => {
  console.log("this is process next tick");
});
Promise.resolve().then(() => console.log("ths is promise block"));
