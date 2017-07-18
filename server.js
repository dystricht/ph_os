
var express = require('express');

var app = express();
var server = app.listen(3000, listening);

app.use(express.static('basement'));

function listening() {
  console.log("Starting server . . .");

}
