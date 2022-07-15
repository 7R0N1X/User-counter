const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);
const path = require('path');

app.set('port', process.env.PORT || 4000);

require('./socket')(io, app);

app.use(express.static(path.join(__dirname, '../public')));

server.listen(app.get('port'), () => {
    console.log('Server on port: ' + app.get('port'));
})