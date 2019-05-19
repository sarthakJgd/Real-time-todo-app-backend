const express = require("express");
const notificationController = require("./../controllers/notificationController");
const appConfig = require('../config/appConfig');


const auth = require('../middlewares/auth')

module.exports.setRouter = function(app){

let baseUrl = appConfig.apiVersion+'/notification';

app.post(baseUrl, notificationController.createNotification);

app.get(baseUrl, auth.isAuthorized, notificationController.getNotifications);

app.delete(baseUrl + '/:notificationId', notificationController.deleteNotifications);

}
