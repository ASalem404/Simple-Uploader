const http = require("http");
const fs = require("fs");
const httpServer = http.createServer();

httpServer.on("listening", () => console.log("listening..."));
httpServer.on("request", (req, res) => {
  if (req.url === "/") {
    res.end(fs.readFileSync("index.html"));
    return;
  }

  if (req.url === "/upload") {
    const fileName = req.headers["file-name"];

    req.on("data", (data) => {
      fs.appendFileSync(fileName, data);
    });
    res.end("Uploaded");
  }
});

httpServer.listen(4000);
