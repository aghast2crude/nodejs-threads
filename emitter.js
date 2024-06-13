const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, toppings) => {
  console.log(`Pizza of ${size} with ${toppings} is ordered!`);
});

emitter.on("order-pizza", (size) => {
  if (size == "large") {
    console.log("Add a complimentary drink with Pizza");
  }
});

emitter.emit("order-pizza", "large", "paneer");
