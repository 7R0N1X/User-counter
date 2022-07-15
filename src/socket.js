let users = 0;

module.exports = function (io, app) {
    io.on('connection', (socket) => {
        console.log('Online User: ' + socket.id);
        users++;
        io.emit('Update', users);

        socket.on('disconnect', function () {
            console.log('User offline: ' + socket.id);
            users--;
            io.emit('Update', users);
        });
    });
}