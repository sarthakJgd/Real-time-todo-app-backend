const express = require('express');
const router = express.Router();
const todoController = require("./../controllers/todoController");
const appConfig = require("./../config/appConfig")
const auth = require('./../middlewares/auth');

module.exports.setRouter = function(app){

    let baseUrl = appConfig.apiVersion+'/todos';

    app.post(baseUrl+'/create', auth.isAuthorized, todoController.createTodo);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/todos/createTodo api for create Todo.
     *
     * @apiParam {string} title title of the user. (body params) (required)
     * @apiParam {string} description description of the user. (body params)
     * @apiParam {Date} todoDate todoDate of the user. (body params) 
     * @apiParam {Object} subtasks subtasks of the user. (body params)
     * @apiParam {string} statusSelected statusSelected of the user. (body params)
     * @apiParam {string} reminderTime reminderTime of the user. (body params) 
     * @apiParam {Array} comments comments of the user. (body params) 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {
            states: [{
                canDelete: false
                comments: [""]
                0: ""
                createdBy: {userId: "10aNQpCp4", userName: "test 2"}
                userId: "10aNQpCp4"
                userName: "test 2"
                createdDate: "2019-05-19T20:02:53.480Z"
                description: ""
                editedBy: ""
                lastModified: "2019-05-19T20:02:53.480Z"
                reminderTime: null
                statusSelected: "Open"
                subtasks: null
                title: "1"
                todoDate: null
                todoId: "1b7Z-a1nK"
                __v: 0
                _id: "5ce1b66df1c3c92674f0e2d0"
            }]
            todoId: "1b7Z-a1nK"
            __v: 0
            _id: "5ce1b66df1c3c92674f0e2d1"
            error: false
            message: "New todo created by test 2"
            status: 200

        }
    
    */

    app.post(baseUrl+'/:todoId/delete',  auth.isAuthorized, todoController.deleteTodo);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/todos/:todoId/delete api for delete Todo.
     *
     * @apiParam {string} userId userId of the user. (body params) 
     * @apiParam {string} userName userName of the user. (body params) 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {n: 1, ok: 1, deletedCount: 1}
            error: false
            message: "Todo State Deleted Successfully"
            status: 200
            error: false
            message: "A todo was deleted by test 2"
            status: 200

        }
    
    */

    app.get(baseUrl+'/view/:todoId',  auth.isAuthorized, todoController.viewByTodoId);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/todos/view/:todoId api for view By Todo Id.
     *
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {
                countryCode: 91
                createdOn: "2019-05-19T12:21:42.000Z"
                email: "test2@test.com"
                firstName: "test"
                friendsList: [{friendId: "Lc-LBi6NG", friendName: "test 1", _id: "5ce14d99b5308e2a8006abcc"},…]
                lastName: "2"
                mobileNumber: 9999999999
                receivedRequests: []
                sentRequests: []
                totalRequest: 0
                userId: "10aNQpCp4"
            }
            error: false
            message: "User Details Found"
            status: 200

        }
    
    */

    app.put(baseUrl+'/:todoId/edit',  auth.isAuthorized, todoController.editTodo);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/todos//:todoId/edit api for edit Todo.
     *
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {
                countryCode: 91
                createdOn: "2019-05-19T12:21:42.000Z"
                email: "test2@test.com"
                firstName: "test"
                friendsList: [{friendId: "Lc-LBi6NG", friendName: "test 1", _id: "5ce14d99b5308e2a8006abcc"},…]
                lastName: "2"
                mobileNumber: 9999999999
                receivedRequests: []
                sentRequests: []
                totalRequest: 0
                userId: "10aNQpCp4"
            }
            error: false
            message: "User Details Found"
            status: 200

        }
    
    */

    app.get(baseUrl+'/getTodosByCreatedId/:userId',  auth.isAuthorized, todoController.getTodosByCreatedId);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/todos/getTodosByCreatedId/:userId api for get Todos By CreatedId.
     *
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {
                countryCode: 91
                createdOn: "2019-05-19T12:21:42.000Z"
                email: "test2@test.com"
                firstName: "test"
                friendsList: [{friendId: "Lc-LBi6NG", friendName: "test 1", _id: "5ce14d99b5308e2a8006abcc"},…]
                lastName: "2"
                mobileNumber: 9999999999
                receivedRequests: []
                sentRequests: []
                totalRequest: 0
                userId: "10aNQpCp4"
            }
            error: false
            message: "User Details Found"
            status: 200

        }
    
    */

    app.post(baseUrl+'/getFriendsTodos',  auth.isAuthorized, todoController.getFriendsTodos);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/todos/getFriendsTodos api for get Friends Todos.
     *
     * @apiParam {Array} friendId friendId of the user. (body params) 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: [{
                canDelete: false
                comments: [""]
                createdBy: {userId: "iDZtM-sxU", userName: "Sambit Nayak"}
                userId: "iDZtM-sxU"
                userName: "Sambit Nayak"
                createdDate: "2019-05-19T13:06:44.110Z"
                description: ""
                editedBy: ""
                lastModified: "2019-05-19T13:06:44.110Z"
                reminderTime: null
                statusSelected: "Open"
                subtasks: null
                title: "dskhbvdsk"
                todoDate: null
                todoId: "irkSaoECU"
            }]
            error: false
            message: "All Todo Details Found"
            status: 200

        }
    
    */

    app.get(baseUrl+'/:todoId/undoTodoState',  auth.isAuthorized, todoController.undoTodoState);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/todos/:todoId/undoTodoState api for undo Todo State.
     *
     * @apiParam {string} userName userName of the user. (body params) 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {n: 1, nModified: 0, ok: 1}
                    error: false
                    message: "Todo edited by test 2"
                    status: 200
            error: false
            message: "Todo Undo successfully done by test 2"
            status: 200

        }
    
    */
}