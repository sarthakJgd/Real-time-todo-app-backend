const socketio = require("socket.io");

//const Comment = require("../models/comment");

let setServer = server => {
  let io = socketio.listen(server);

  let myIo = io.of("/");

  myIo.on("connection", socket => {
    console.log("on connection--emitting verify user");
    console.log("s0cket connected");

    socket.on('getNotification', function(data) {
      console.log('notification data', data)
      io.emit('showToall', data)
    })

  });
};
 
module.exports = {
  setServer: setServer
};
