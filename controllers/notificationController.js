const Notification = require("./../models/notificationModel");

exports.createNotification = (req, res, next) => {
  const notifications = new Notification({
    issueId: req.body.issueId,
    userId: req.body.userId,
    notification: req.body.notification
  });
  notifications
    .save()
    .then(data => {
      console.log(data);
      res.status(201).json({
        message: "notification has been stored in DB",
        id: data.issueId,
        userid: data.userId,
        notification: data.notification
      });
    })
    .catch(err => {
      res.status(404).json({
        message: "error in saving notification",
        error: err
      });
    });
};

exports.getNotifications = (req, res, next) => {
  Watcher.find({ userId: req.userData.id }).then(watchers => {
    const userid = watchers.map(watcher => watcher.userId);
    console.log("userId is", userid);

    const allissueIds = watchers.map(watcher => watcher.issueId);
    console.log("allids", allissueIds);

    if (userid.length !== 0) {
      console.log("watchers found", watchers);
      Notification.find({ issueId: allissueIds })
        .then(result => { 
          console.log("result is", result);
          res.status(200).json({
            message: "all watcher notifications found",
            result: result
          });
        })
        .catch(err => {
          res.status(404).json({
            message: "error in getting the notifications",
            error: err
          });
        });
    } else {
      Notification.find({ userId: req.userData.id })
        .then(result => {
          console.log("all user related notifications found", req.userData.id);
          res.status(200).json({
            message: "all user related notifications found",
            result: result
          });
        })
        .catch(err => {
          res.json({
            message: "error in retrieving user related notifications",
            result: err
          });
        });
    }
  });
};

exports.deleteNotifications = (req, res, next) => {
  Notification.deleteOne({ _id: req.params.notificationId })
    .then(result => {
      res.status(200).json({ message: "notification deleted !!!" });
    })
    .catch(err => {
      res.json({ error: err });
    });
};
