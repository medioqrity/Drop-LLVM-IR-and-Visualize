const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }
    if (req.url.endsWith(".js")) {
        fs.readFile(path.join(__dirname, req.url.substring(1)), (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(data);
        });
    }
    if (req.url === "/gen_dot") {
        
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
