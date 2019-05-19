const express = require('express');
const router = express.Router();
const userController = require("./../controllers/userController");
const appConfig = require("./../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;


    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);


    // params: userId.
    //app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

    
    // params: firstName, lastName, email, mobileNumber, password, apiKey.
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for user sign up.
     *
     * @apiParam {string} firstName firstName of the user. (body params) (required)
     * @apiParam {string} lastName lastName of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} mobileNumber mobileNumber of the user. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */

    app.post(`${baseUrl}/login`, userController.loginFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {
                authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjhEanRqc1I3WiIsImlhdCI6MTU1ODI5MzQ3ODA1OSwiZXhwIjoxNTU4Mzc5ODc4LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6ImlEWnRNLXN4VSIsImZpcnN0TmFtZSI6IlNhbWJpdCIsImxhc3ROYW1lIjoiTmF5YWsiLCJlbWFpbCI6InNhbWJpdG5heWFrY3NlQGdtYWlsLmNvbSIsImNvdW50cnlDb2RlIjo5MSwibW9iaWxlTnVtYmVyIjo5OTk5OTU0NTQzLCJ0b3RhbFJlcXVlc3QiOjAsInNlbnRSZXF1ZXN0cyI6W10sInJlY2VpdmVkUmVxdWVzdHMiOltdLCJmcmllbmRzTGlzdCI6W3siZnJpZW5kSWQiOiJpX2ZkR28xNmciLCJmcmllbmROYW1lIjoiTGFrc2htaSBWIE4iLCJfaWQiOiI1Y2UxMjk4YWI1MzA4ZTJhODAwNmFhYWUifSx7ImZyaWVuZElkIjoiMTBhTlFwQ3A0IiwiZnJpZW5kTmFtZSI6InRlc3QgMiIsIl9pZCI6IjVjZTE1NTliYjUzMDhlMmE4MDA2YWJmMyJ9LHsiZnJpZW5kSWQiOiJMYy1MQmk2TkciLCJmcmllbmROYW1lIjoidGVzdCAxIiwiX2lkIjoiNWNlMTU1YzhiNTMwOGUyYTgwMDZhYmY4In1dfX0.JPE4jIyy3xzBG4gjW-EOZMYNRIHzLZzdu6HZ9VdpIRo"
                userDetails: {userId: "iDZtM-sxU", firstName: "Sambit", lastName: "Nayak", email: "sambitnayakcse@gmail.com",…}
                countryCode: 91
                email: "sambitnayakcse@gmail.com"
                firstName: "Sambit"
                friendsList: [{friendId: "i_fdGo16g", friendName: "Lakshmi V N", _id: "5ce1298ab5308e2a8006aaae"},…]
                0: {friendId: "i_fdGo16g", friendName: "Lakshmi V N", _id: "5ce1298ab5308e2a8006aaae"}
                1: {friendId: "10aNQpCp4", friendName: "test 2", _id: "5ce1559bb5308e2a8006abf3"}
                2: {
                friendId: "Lc-LBi6NG"
                friendName: "test 1"
                _id: "5ce155c8b5308e2a8006abf8"
                lastName: "Nayak"
                mobileNumber: 9999954543
                receivedRequests: []
                sentRequests: []
                totalRequest: 0
                userId: "iDZtM-sxU"
                }
            }
            error: false
            message: "Login Successful"
            status: 200

        }
    */
    

    app.post(`${baseUrl}/logout`, auth.isAuthorized ,userController.logout);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/logout api for user logout.
     *
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: null
            error: false
            message: "Logged Out Successfully"
            status: 200

        }
    */

    app.post(`${baseUrl}/resetPassword`, userController.PasswordResetMail);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetPassword api for Password Reset Mail.
     *
     * @apiParam {string} email email of the user. (body params) 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: null
            error: false
            message: "Reset mail sent and Auth deleted Successfully"
            status: 200

        }
    */
    

    app.post(`${baseUrl}/resetNewPassword`, userController.resetPassword);


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetNewPassword api for reset Password.
     *
     * @apiParam {string} userPassword userPassword of the user. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {n: 1, nModified: 1, ok: 1}
            n: 1
            nModified: 1
            ok: 1
            error: false
            message: "User password updated"
            status: 200

        }
    */


    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/view/all api for get All User.
     *
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: [
                0: {
                countryCode: 91
                createdOn: "2019-05-19T08:42:40.000Z"
                email: "lakshmivn1995@gmail.com"
                firstName: "Lakshmi"
                friendsList: [{friendId: "iDZtM-sxU", friendName: "Sambit Nayak", _id: "5ce1298ab5308e2a8006aaad"},…]
                lastName: "V N"
                mobileNumber: 9663765292
                password: "$2b$10$sLHwozZGZsG8PFkNtx5rKOmuw78NTJaVbZvGkJzFP57UjKl2GTytK"
                receivedRequests: []
                sentRequests: []
                totalRequest: 0
                userId: "i_fdGo16g"
                }
                1: {
                countryCode: 91
                createdOn: "2019-05-19T08:44:17.000Z"
                email: "sambitnayakcse@gmail.com"
                firstName: "Sambit"
                friendsList: [{friendId: "i_fdGo16g", friendName: "Lakshmi V N", _id: "5ce1298ab5308e2a8006aaae"},…]
                lastName: "Nayak"
                mobileNumber: 9999954543
                password: "$2a$10$VM38dSxBHwCoH4jQEqowue.tyA5MbBpAha.dGtHfDi1xr1o42LkOu"
                receivedRequests: []
                sentRequests: []
                totalRequest: 0
                userId: "iDZtM-sxU"
                }
                2: {
                countryCode: 91
                createdOn: "2019-05-19T12:21:12.000Z"
                email: "test1@test.com"
                firstName: "test"
                friendsList: [{friendId: "10aNQpCp4", friendName: "test 2", _id: "5ce14d99b5308e2a8006abcb"},…]
                lastName: "1"
                mobileNumber: 9999222299
                password: "$2b$10$FouTKwfEkCOKK8gxD40SpO4bQVO0g.UmwFj6OnBpe.p4B8IPUpBQa"
                receivedRequests: []
                sentRequests: []
                totalRequest: 0
                userId: "Lc-LBi6NG"
                }
                3: {
                countryCode: 91
                createdOn: "2019-05-19T12:21:42.000Z"
                email: "test2@test.com"
                firstName: "test"
                friendsList: [{friendId: "Lc-LBi6NG", friendName: "test 1", _id: "5ce14d99b5308e2a8006abcc"},…]
                lastName: "2"
                mobileNumber: 9999999999
                password: "$2b$10$ZLi4G1g5wN4r86B0.aGveOrwU7v8nMSR3oGJllgNMxwtX0JXDlSX2"
                receivedRequests: []
                sentRequests: []
                totalRequest: 0
                userId: "10aNQpCp4"
                }
                4: {
                countryCode: 91
                createdOn: "2019-05-19T19:35:22.000Z"
                email: "test3@test.com"
                firstName: "test"
                friendsList: []
                lastName: "3"
                mobileNumber: 9999999999
                password: "$2a$10$atoXioMRc3o6NhBX08XA6OFh3l6sc9KpObuKLamW6qRlTkojACuW."
                receivedRequests: []
                sentRequests: []
                totalRequest: 0
                userId: "LP8EVAY7R"
                }
            ]
            error: false
            message: "All User Details Found"
            status: 200
        }
    */


    app.put(`${baseUrl}/sendFriendRequest`, auth.isAuthorized, userController.sendFriendRequest);


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/sendFriendRequest api for user send Friend Request.
     *
     * @apiParam {string} requestorId requestorId of the user. (body params) 
     * @apiParam {string} requestorName requestorName of the user. (body params) 
     * @apiParam {string} requestedId requestedId of the user. (body params) 
     * @apiParam {string} requestedName requestedName of the user. (body params) 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {n: 1, nModified: 1, ok: 1}
            error: false
            message: "User details edited"
            status: 200
            error: false
            message: "Friend request sent by test 3 to Sambit Nayak"
            status: 200

        }
    */


    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/:userId/details api for user get Single User.
     *
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {
                canDelete: false
                comments: [""]
                0: ""
                createdBy: {userId: "LP8EVAY7R", userName: "test 3"}
                userId: "LP8EVAY7R"
                userName: "test 3"
                createdDate: "2019-05-19T19:46:36.457Z"
                description: ""
                editedBy: ""
                lastModified: "2019-05-19T19:46:36.457Z"
                reminderTime: null
                statusSelected: "Open"
                subtasks: null
                title: "1111"
                todoDate: null
                todoId: "d0_W1Hf0x"
                __v: 0
                _id: "5ce1b29c7baad34444faee06"
            }
            error: false
            message: "Todo Found Successfully."
            status: 200

        }
    */


    app.put(`${baseUrl}/acceptFriendRequest`, auth.isAuthorized, userController.acceptFriendRequest);


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/acceptFriendRequest api for user accept Friend Request.
     *
     * @apiParam {string} requestorId requestorId of the user. (body params) 
     * @apiParam {string} requestorName requestorName of the user. (body params) 
     * @apiParam {string} requestedId requestedId of the user. (body params) 
     * @apiParam {string} requestedName requestedName of the user. (body params) 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
           data: {n: 1, nModified: 1, ok: 1}
                error: false
                message: "Successfully added in friend list of requestor"
                status: 200
            error: false
            message: "Sambit Nayak and test 3 are now friends"
            status: 200

        }
    */


    app.put(`${baseUrl}/rejectFriendRequest`, auth.isAuthorized, userController.rejectFriendRequest);


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/rejectFriendRequest api for user reject Friend Request.
     *
     * @apiParam {string} requestorId requestorId of the user. (body params) 
     * @apiParam {string} requestorName requestorName of the user. (body params) 
     * @apiParam {string} requestedId requestedId of the user. (body params) 
     * @apiParam {string} requestedName requestedName of the user. (body params) 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            data: {n: 1, nModified: 1, ok: 1}
                error: false
                message: "Successfully removed from requested persons received requests"
                status: 200
            error: false
            message: "Friend request rejected"
            status: 200

        }
    */
}
