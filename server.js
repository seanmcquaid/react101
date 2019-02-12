const express = require("express");
const app = express();

app.use(express.static(__dirname+"/"));

app.listen(8484);
console.log("express is working")