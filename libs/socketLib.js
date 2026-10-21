const socketio = require("socket.io");
const mongoose = require("mongoose");
const tokenLib = require("./tokenLib");

const AuthModel = mongoose.model("Auth");

//const Comment = require("../models/comment");

let setServer = server => {
  let io = socketio.listen(server);

  let myIo = io.of("/");

  myIo.on("connection", socket => {

    socket.on('set-user', authToken => {
      if (socket.userId) {
        socket.emit('auth-error', { error: 'Socket is already authenticated' });
        return;
      }
      if (typeof authToken !== 'string' || !authToken) {
        socket.emit('auth-error', { error: 'Authentication required' });
        socket.disconnect(true);
        return;
      }

      tokenLib.verifyClaimWithoutSecret(authToken, (tokenError, claims) => {
        if (tokenError || !claims || !claims.data || !claims.data.userId) {
          socket.emit('auth-error', { error: 'Invalid authentication token' });
          socket.disconnect(true);
          return;
        }

        AuthModel.findOne({ authToken, userId: claims.data.userId }, (authError, authDetails) => {
          if (authError || !authDetails) {
            socket.emit('auth-error', { error: 'Invalid authentication token' });
            socket.disconnect(true);
            return;
          }
          socket.userId = claims.data.userId;
          socket.join(socket.userId);
          socket.emit('authenticated');
        });
      });
    });

    socket.on('getNotification', function(data) {
      if (!socket.userId) {
        socket.emit('auth-error', { error: 'Authentication required' });
        return;
      }
      if (!data || typeof data.data !== 'string' || data.data.length > 500) {
        return;
      }
      myIo.to(socket.userId).emit('showToall', { data: data.data });
    })

  });
};
 
module.exports = {
  setServer: setServer
};
