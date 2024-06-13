let instance;

class Counter {
  constructor(counter) {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    this.counter = counter;
    instance = this;
  }

  storeInCache(key, value) {
    this.cache = {
      [key]: value,
    };
  }
  getFromCache(key) {
    return this.cache[key];
  }
  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

const singletonCounter = Object.freeze(new Counter(10));

module.exports = Counter;
