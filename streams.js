const fs = require("fs");

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt", {
  encoding: "utf-8",
});

// Write to other file using pipe functionality
readableStream.pipe(writeableStream);

// Instead of readableStream events, we can use pipe functionality
// readableStream.on("data", (chunk) => {
//   console.log("chunk", chunk);
//   writeableStream.write(chunk);
// });
