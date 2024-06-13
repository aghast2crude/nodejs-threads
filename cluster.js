const cluster = require("node:cluster");
const http = require("http");

// const OS = require("node:os");

// Have to manually add scheduling policy for requests to get distributed.
cluster.schedulingPolicy = 2;

// console.log("os thread my system has", OS.);
if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);
  const server = http.createServer((req, res) => {
    if (req.url == "/") {
      console.log("inside home page url");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    } else if (req.url == "/slow-page") {
      console.log("inside slow page url");
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });

  server.listen(8000, () => console.log("Listening to port 8000"));
}
