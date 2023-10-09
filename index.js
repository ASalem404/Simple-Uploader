const http = require("http");
const fs = require("fs");
const httpServer = http.createServer();

httpServer.on("listening", () => console.log("listening..."));
httpServer.on("request", (req, res) => {
  if (req.url === "/") {
    fs.readFileSync("index.html");
    return;
  }
});

httpServer.listen(3300);
