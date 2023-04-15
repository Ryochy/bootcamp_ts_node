"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const server = node_http_1.default.createServer();
server.on("request", async (req, res) => {
    console.log("request url: ", req.url);
    // Content-Type is important for browsers.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("hello!\n");
    res.end();
});
server.on("listening", () => {
    console.log("start listening!");
});
// Start listening 12345 port of localhost (127.0.0.1).
server.listen(12345, () => {
    console.log("listening on http://localhost:12345/");
});
console.log("run server.js");
