/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer();
var io = require('socket.io')(app);

io.on('connection', onRequest);

function onRequest(socket) {
    socket.on('RecieveNewMsg', function(msg){
        socket.emit('AttachNewMsg', "<br/>" + msg);
        socket.broadcast.emit('AttachNewMsg', "<br/>" + msg);
    });
}

// var io = require('socket.io').listen(server);
app.listen((process.env.PORT || 8080));
console.log("The server is now running...");