import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3001;

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {});
  }

  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
