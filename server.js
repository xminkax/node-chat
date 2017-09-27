var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var mongoose = require('mongoose'),
connections = [];

Schema = new mongoose.Schema({
    message : String
});

//const Message = mongoose.model('messages', Schema);
const MONGOLAB_URI = "mongodb://heroku_z45zn901:alrmhkl5eg87ao5drig0doctb6@ds139989.mlab.com:39989/heroku_z45zn901";

mongoose.connect(MONGOLAB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

server.listen(process.env.PORT || 4000);
console.log('server running...');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection', function(socket){
    //connections.push(socket);
    //console.log('connected %s sockets connected', connections.length)
    //
    //socket.on('disconnect', function(socker){
    //    connections.splice(connections.indexOf(socket), 1);
    //    console.log('Disconnected %s sockets connected', connections.length)
    //});
    //
    //socket.on('send message', function(data){
    //    const newMessage = new Message({message: data});
    //        newMessage.save(function (err) {
    //    });
    //    io.sockets.emit('add messages', [{message: data}]);
    //});
    //
    //socket.on('client start', function() {
    //    Message.find(function (err, messages) {
    //        io.sockets.emit('add messages', messages);
    //    });
    //});

});


