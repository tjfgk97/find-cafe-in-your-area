const express = require("express");
const path = require("path"); // react build 파일에 접근하기 위해 필요함
const port = 3030;

// express 객체 생성
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.use("/", function (req, res, next) {
    res.sendFile(path.join(__dirname + "/build", "index.html"));
});

app.listen(port, function () {
    console.log("server works on port :" + port);
});