var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var data = fs.readFileSync('/home/ubuntu/bitstarter/index.html');
app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
