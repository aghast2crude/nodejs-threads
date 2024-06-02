// All user written synchronous Javascript code takes priority over async code that the runtime would like to eventually execute

/* Trail 1
console.log("console log 1");
process.nextTick(() => console.log("process next tick 1"));
console.log("console log 2");

*/

// All callbacks in next tick queue are executed before promises

/* Trail 2
Promise.resolve().then(() => console.log("this is promise resolve 1"));
process.nextTick(() => console.log("process next tick 1"));
*/

process.nextTick(() => console.log("this is process next tick 1"));
process.nextTick(() => {
  console.log("this is process.next tick 2");
  process.nextTick(() => {
    console.log("this is inner next tick inside next tick");
  });
});
process.nextTick(() => console.log("This is process.nextTick 3"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
  console.log("This is promise.resolve 2");
  process.nextTick(() => {
    console.log("This is process.nextTick in inside promise block");
  });
});
Promise.resolve().then(() => console.log("This is Promise.resolve 3"));
