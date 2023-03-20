import { IncomingMessage, ServerResponse, createServer } from "http";
import { join } from "path";
import { readFile } from "fs";
import { process_llvm_ir } from "./opt_utils";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/") {
        readFile(join(__dirname, "index.html"), (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }
    if (req.url?.endsWith(".js")) {
        readFile(join(__dirname, req.url.substring(1)), (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(data);
        });
    }
    if (req.url === "/gen_dot") {
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            let dot_files = process_llvm_ir(body);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(dot_files));
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
