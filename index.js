import { createServer } from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const hostname = "127.0.0.1";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (_, content) => {
      res.writeHead(200, { ContentType: "text/html" });
      res.end(content);
    });
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "public", "about.html"), (_, content) => {
      res.writeHead(200, { ContentType: "text/html" });
      res.end(content);
    });
  } else if (req.url === "/contact-me") {
    fs.readFile(
      path.join(__dirname, "public", "contact-me.html"),
      (_, content) => {
        res.writeHead(200, { ContentType: "text/html" });
        res.end(content);
      },
    );
  } else {
    fs.readFile(path.join(__dirname, "public", "404.html"), (_, content) => {
      res.writeHead(200, { ContentType: "text/html" });
      res.end(content);
    });
  }
});

const port = process.env.PORT || 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
