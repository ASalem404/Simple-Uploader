const http = require("http");
const fs = require("fs");
const httpServer = http.createServer();

httpServer.on("listening", () => console.log("listening..."));
httpServer.on("request", (req, res) => {
  if (req.url === "/") {
    fs.readFileSync("index.html");
    return;
  }

  if (req.url === "/upload") {
    const fileName = req.headers["file-name"];

    req.on("data", (data) => {
      fs.appendFileSync(fileName, data);
      console.log("received data: " + data.length);
    });
    res.end("Uploaded");
  }
});

httpServer.listen(3300);
