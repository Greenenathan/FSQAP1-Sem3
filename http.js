//HTTP: HTTP is a node module that allows Node.js to transfer
//data over Hyper Text Transfer Protocol. You can use the
//create server method to create a HTTP server.

var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Welcome to QAP1"); //write a response to the client
    res.end(); //end the response
  })
  .listen(3002); //the server object listens on port 3002
