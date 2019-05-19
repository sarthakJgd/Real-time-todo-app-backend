define({ "api": [
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/todos/getTodosByCreatedId/:userId",
    "title": "api for get Todos By CreatedId.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {\n        countryCode: 91\n        createdOn: \"2019-05-19T12:21:42.000Z\"\n        email: \"test2@test.com\"\n        firstName: \"test\"\n        friendsList: [{friendId: \"Lc-LBi6NG\", friendName: \"test 1\", _id: \"5ce14d99b5308e2a8006abcc\"},…]\n        lastName: \"2\"\n        mobileNumber: 9999999999\n        receivedRequests: []\n        sentRequests: []\n        totalRequest: 0\n        userId: \"10aNQpCp4\"\n    }\n    error: false\n    message: \"User Details Found\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/todoRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1TodosGettodosbycreatedidUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/todos//:todoId/edit",
    "title": "api for edit Todo.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {\n        countryCode: 91\n        createdOn: \"2019-05-19T12:21:42.000Z\"\n        email: \"test2@test.com\"\n        firstName: \"test\"\n        friendsList: [{friendId: \"Lc-LBi6NG\", friendName: \"test 1\", _id: \"5ce14d99b5308e2a8006abcc\"},…]\n        lastName: \"2\"\n        mobileNumber: 9999999999\n        receivedRequests: []\n        sentRequests: []\n        totalRequest: 0\n        userId: \"10aNQpCp4\"\n    }\n    error: false\n    message: \"User Details Found\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/todoRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1TodosTodoidEdit"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/todos/:todoId/undoTodoState",
    "title": "api for undo Todo State.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {n: 1, nModified: 0, ok: 1}\n            error: false\n            message: \"Todo edited by test 2\"\n            status: 200\n    error: false\n    message: \"Todo Undo successfully done by test 2\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/todoRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1TodosTodoidUndotodostate"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/todos/view/:todoId",
    "title": "api for view By Todo Id.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {\n        countryCode: 91\n        createdOn: \"2019-05-19T12:21:42.000Z\"\n        email: \"test2@test.com\"\n        firstName: \"test\"\n        friendsList: [{friendId: \"Lc-LBi6NG\", friendName: \"test 1\", _id: \"5ce14d99b5308e2a8006abcc\"},…]\n        lastName: \"2\"\n        mobileNumber: 9999999999\n        receivedRequests: []\n        sentRequests: []\n        totalRequest: 0\n        userId: \"10aNQpCp4\"\n    }\n    error: false\n    message: \"User Details Found\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/todoRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1TodosViewTodoid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "api for user get Single User.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {\n        canDelete: false\n        comments: [\"\"]\n        0: \"\"\n        createdBy: {userId: \"LP8EVAY7R\", userName: \"test 3\"}\n        userId: \"LP8EVAY7R\"\n        userName: \"test 3\"\n        createdDate: \"2019-05-19T19:46:36.457Z\"\n        description: \"\"\n        editedBy: \"\"\n        lastModified: \"2019-05-19T19:46:36.457Z\"\n        reminderTime: null\n        statusSelected: \"Open\"\n        subtasks: null\n        title: \"1111\"\n        todoDate: null\n        todoId: \"d0_W1Hf0x\"\n        __v: 0\n        _id: \"5ce1b29c7baad34444faee06\"\n    }\n    error: false\n    message: \"Todo Found Successfully.\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridDetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for get All User.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: [\n        0: {\n        countryCode: 91\n        createdOn: \"2019-05-19T08:42:40.000Z\"\n        email: \"lakshmivn1995@gmail.com\"\n        firstName: \"Lakshmi\"\n        friendsList: [{friendId: \"iDZtM-sxU\", friendName: \"Sambit Nayak\", _id: \"5ce1298ab5308e2a8006aaad\"},…]\n        lastName: \"V N\"\n        mobileNumber: 9663765292\n        password: \"$2b$10$sLHwozZGZsG8PFkNtx5rKOmuw78NTJaVbZvGkJzFP57UjKl2GTytK\"\n        receivedRequests: []\n        sentRequests: []\n        totalRequest: 0\n        userId: \"i_fdGo16g\"\n        }\n        1: {\n        countryCode: 91\n        createdOn: \"2019-05-19T08:44:17.000Z\"\n        email: \"sambitnayakcse@gmail.com\"\n        firstName: \"Sambit\"\n        friendsList: [{friendId: \"i_fdGo16g\", friendName: \"Lakshmi V N\", _id: \"5ce1298ab5308e2a8006aaae\"},…]\n        lastName: \"Nayak\"\n        mobileNumber: 9999954543\n        password: \"$2a$10$VM38dSxBHwCoH4jQEqowue.tyA5MbBpAha.dGtHfDi1xr1o42LkOu\"\n        receivedRequests: []\n        sentRequests: []\n        totalRequest: 0\n        userId: \"iDZtM-sxU\"\n        }\n        2: {\n        countryCode: 91\n        createdOn: \"2019-05-19T12:21:12.000Z\"\n        email: \"test1@test.com\"\n        firstName: \"test\"\n        friendsList: [{friendId: \"10aNQpCp4\", friendName: \"test 2\", _id: \"5ce14d99b5308e2a8006abcb\"},…]\n        lastName: \"1\"\n        mobileNumber: 9999222299\n        password: \"$2b$10$FouTKwfEkCOKK8gxD40SpO4bQVO0g.UmwFj6OnBpe.p4B8IPUpBQa\"\n        receivedRequests: []\n        sentRequests: []\n        totalRequest: 0\n        userId: \"Lc-LBi6NG\"\n        }\n        3: {\n        countryCode: 91\n        createdOn: \"2019-05-19T12:21:42.000Z\"\n        email: \"test2@test.com\"\n        firstName: \"test\"\n        friendsList: [{friendId: \"Lc-LBi6NG\", friendName: \"test 1\", _id: \"5ce14d99b5308e2a8006abcc\"},…]\n        lastName: \"2\"\n        mobileNumber: 9999999999\n        password: \"$2b$10$ZLi4G1g5wN4r86B0.aGveOrwU7v8nMSR3oGJllgNMxwtX0JXDlSX2\"\n        receivedRequests: []\n        sentRequests: []\n        totalRequest: 0\n        userId: \"10aNQpCp4\"\n        }\n        4: {\n        countryCode: 91\n        createdOn: \"2019-05-19T19:35:22.000Z\"\n        email: \"test3@test.com\"\n        firstName: \"test\"\n        friendsList: []\n        lastName: \"3\"\n        mobileNumber: 9999999999\n        password: \"$2a$10$atoXioMRc3o6NhBX08XA6OFh3l6sc9KpObuKLamW6qRlTkojACuW.\"\n        receivedRequests: []\n        sentRequests: []\n        totalRequest: 0\n        userId: \"LP8EVAY7R\"\n        }\n    ]\n    error: false\n    message: \"All User Details Found\"\n    status: 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/todos/createTodo",
    "title": "api for create Todo.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "todoDate",
            "description": "<p>todoDate of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "subtasks",
            "description": "<p>subtasks of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "statusSelected",
            "description": "<p>statusSelected of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reminderTime",
            "description": "<p>reminderTime of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "comments",
            "description": "<p>comments of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {\n    states: [{\n        canDelete: false\n        comments: [\"\"]\n        0: \"\"\n        createdBy: {userId: \"10aNQpCp4\", userName: \"test 2\"}\n        userId: \"10aNQpCp4\"\n        userName: \"test 2\"\n        createdDate: \"2019-05-19T20:02:53.480Z\"\n        description: \"\"\n        editedBy: \"\"\n        lastModified: \"2019-05-19T20:02:53.480Z\"\n        reminderTime: null\n        statusSelected: \"Open\"\n        subtasks: null\n        title: \"1\"\n        todoDate: null\n        todoId: \"1b7Z-a1nK\"\n        __v: 0\n        _id: \"5ce1b66df1c3c92674f0e2d0\"\n    }]\n    todoId: \"1b7Z-a1nK\"\n    __v: 0\n    _id: \"5ce1b66df1c3c92674f0e2d1\"\n    error: false\n    message: \"New todo created by test 2\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/todoRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1TodosCreatetodo"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/todos/getFriendsTodos",
    "title": "api for get Friends Todos.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "friendId",
            "description": "<p>friendId of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: [{\n        canDelete: false\n        comments: [\"\"]\n        createdBy: {userId: \"iDZtM-sxU\", userName: \"Sambit Nayak\"}\n        userId: \"iDZtM-sxU\"\n        userName: \"Sambit Nayak\"\n        createdDate: \"2019-05-19T13:06:44.110Z\"\n        description: \"\"\n        editedBy: \"\"\n        lastModified: \"2019-05-19T13:06:44.110Z\"\n        reminderTime: null\n        statusSelected: \"Open\"\n        subtasks: null\n        title: \"dskhbvdsk\"\n        todoDate: null\n        todoId: \"irkSaoECU\"\n    }]\n    error: false\n    message: \"All Todo Details Found\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/todoRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1TodosGetfriendstodos"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/todos/:todoId/delete",
    "title": "api for delete Todo.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {n: 1, ok: 1, deletedCount: 1}\n    error: false\n    message: \"Todo State Deleted Successfully\"\n    status: 200\n    error: false\n    message: \"A todo was deleted by test 2\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/todoRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1TodosTodoidDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {\n        authToken: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjhEanRqc1I3WiIsImlhdCI6MTU1ODI5MzQ3ODA1OSwiZXhwIjoxNTU4Mzc5ODc4LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6ImlEWnRNLXN4VSIsImZpcnN0TmFtZSI6IlNhbWJpdCIsImxhc3ROYW1lIjoiTmF5YWsiLCJlbWFpbCI6InNhbWJpdG5heWFrY3NlQGdtYWlsLmNvbSIsImNvdW50cnlDb2RlIjo5MSwibW9iaWxlTnVtYmVyIjo5OTk5OTU0NTQzLCJ0b3RhbFJlcXVlc3QiOjAsInNlbnRSZXF1ZXN0cyI6W10sInJlY2VpdmVkUmVxdWVzdHMiOltdLCJmcmllbmRzTGlzdCI6W3siZnJpZW5kSWQiOiJpX2ZkR28xNmciLCJmcmllbmROYW1lIjoiTGFrc2htaSBWIE4iLCJfaWQiOiI1Y2UxMjk4YWI1MzA4ZTJhODAwNmFhYWUifSx7ImZyaWVuZElkIjoiMTBhTlFwQ3A0IiwiZnJpZW5kTmFtZSI6InRlc3QgMiIsIl9pZCI6IjVjZTE1NTliYjUzMDhlMmE4MDA2YWJmMyJ9LHsiZnJpZW5kSWQiOiJMYy1MQmk2TkciLCJmcmllbmROYW1lIjoidGVzdCAxIiwiX2lkIjoiNWNlMTU1YzhiNTMwOGUyYTgwMDZhYmY4In1dfX0.JPE4jIyy3xzBG4gjW-EOZMYNRIHzLZzdu6HZ9VdpIRo\"\n        userDetails: {userId: \"iDZtM-sxU\", firstName: \"Sambit\", lastName: \"Nayak\", email: \"sambitnayakcse@gmail.com\",…}\n        countryCode: 91\n        email: \"sambitnayakcse@gmail.com\"\n        firstName: \"Sambit\"\n        friendsList: [{friendId: \"i_fdGo16g\", friendName: \"Lakshmi V N\", _id: \"5ce1298ab5308e2a8006aaae\"},…]\n        0: {friendId: \"i_fdGo16g\", friendName: \"Lakshmi V N\", _id: \"5ce1298ab5308e2a8006aaae\"}\n        1: {friendId: \"10aNQpCp4\", friendName: \"test 2\", _id: \"5ce1559bb5308e2a8006abf3\"}\n        2: {\n        friendId: \"Lc-LBi6NG\"\n        friendName: \"test 1\"\n        _id: \"5ce155c8b5308e2a8006abf8\"\n        lastName: \"Nayak\"\n        mobileNumber: 9999954543\n        receivedRequests: []\n        sentRequests: []\n        totalRequest: 0\n        userId: \"iDZtM-sxU\"\n        }\n    }\n    error: false\n    message: \"Login Successful\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api for user logout.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: null\n    error: false\n    message: \"Logged Out Successfully\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetNewPassword",
    "title": "api for reset Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userPassword",
            "description": "<p>userPassword of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {n: 1, nModified: 1, ok: 1}\n    n: 1\n    nModified: 1\n    ok: 1\n    error: false\n    message: \"User password updated\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetnewpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "api for Password Reset Mail.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: null\n    error: false\n    message: \"Reset mail sent and Auth deleted Successfully\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user sign up.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/acceptFriendRequest",
    "title": "api for user accept Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestorId",
            "description": "<p>requestorId of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestorName",
            "description": "<p>requestorName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedId",
            "description": "<p>requestedId of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedName",
            "description": "<p>requestedName of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   data: {n: 1, nModified: 1, ok: 1}\n        error: false\n        message: \"Successfully added in friend list of requestor\"\n        status: 200\n    error: false\n    message: \"Sambit Nayak and test 3 are now friends\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersAcceptfriendrequest"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/rejectFriendRequest",
    "title": "api for user reject Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestorId",
            "description": "<p>requestorId of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestorName",
            "description": "<p>requestorName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedId",
            "description": "<p>requestedId of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedName",
            "description": "<p>requestedName of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {n: 1, nModified: 1, ok: 1}\n        error: false\n        message: \"Successfully removed from requested persons received requests\"\n        status: 200\n    error: false\n    message: \"Friend request rejected\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersRejectfriendrequest"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/sendFriendRequest",
    "title": "api for user send Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestorId",
            "description": "<p>requestorId of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestorName",
            "description": "<p>requestorName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedId",
            "description": "<p>requestedId of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedName",
            "description": "<p>requestedName of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    data: {n: 1, nModified: 1, ok: 1}\n    error: false\n    message: \"User details edited\"\n    status: 200\n    error: false\n    message: \"Friend request sent by test 3 to Sambit Nayak\"\n    status: 200\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersSendfriendrequest"
  }
] });
