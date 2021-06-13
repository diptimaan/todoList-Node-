const { RSA_NO_PADDING } = require("constants");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.protocol, req.hostname, req.url);
  res.send("<h1>hello world</h1>");
});

app.get("/html", (req, res) => {
  res.sendFile(__dirname + "/files/index.html");
});

let pageView = 0;
app.get("/views", (req, res) => {
  pageView++;
  res.send("no of views" + pageView);
});

app.listen(4444);
