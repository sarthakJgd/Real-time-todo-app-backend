const express = require('express');
const router = express.Router();
const todoController = require("./../controllers/todoController");
const appConfig = require("./../config/appConfig")
const auth = require('./../middlewares/auth');

module.exports.setRouter = function(app){

    let baseUrl = appConfig.apiVersion+'/todos';

    app.get(baseUrl+'/all',  auth.isAuthorized, todoController.getAllTodos);

    app.post(baseUrl+'/create', auth.isAuthorized, todoController.createTodo);

    app.post(baseUrl+'/:todoId/delete',  auth.isAuthorized, todoController.deleteTodo);

    app.get(baseUrl+'/view/:todoId',  auth.isAuthorized, todoController.viewByTodoId);

    app.put(baseUrl+'/:todoId/edit',  auth.isAuthorized, todoController.editTodo);

    app.get(baseUrl+'/getTodosByCreatedId/:userId',  auth.isAuthorized, todoController.getTodosByCreatedId);

    app.post(baseUrl+'/getFriendsTodos',  auth.isAuthorized, todoController.getFriendsTodos);

    app.get(baseUrl+'/:todoId/undoTodoState',  auth.isAuthorized, todoController.undoTodoState);
}