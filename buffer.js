const buffer = new Buffer.from("Surya");

buffer.write("testhere");
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer);
