var express = require('express');

const server = express();

server.get("/", function(req, res) {
    res.json({"show": true});
});

server.listen(process.env.PORT || 3001,function () {
    console.log("server is running at 3001");
});