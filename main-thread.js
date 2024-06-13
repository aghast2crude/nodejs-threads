const http = require("http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url == "/slow-page") {
    const worker_thread = new Worker("./worker-thread.js");
    worker_thread.on("message", (j) => {
      console.log("j value", j);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Count of this page ${j}`);
    });
  }
});

server.listen(8000, () => {
  console.log("listening to port 8000");
});
