const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
/* Models */
const TodoModel = mongoose.model('Todo');
const TodoStateModel = mongoose.model('TodoStates')


/**
 * function to create the todo.
 */
let createTodo = (req, res) => {
    let todoCreationFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.title)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {

                var today = Date.now()
                let todoId = shortid.generate()

                let newTodo = new TodoModel({

                    todoId: todoId,
                    title: req.body.title,
                    description: req.body.description,
                    todoDate: req.body.todoDate,
                    reminderTime: req.body.reminderTime,
                    subtasks: req.body.subtasks,
                    statusSelected: req.body.statusSelected,
                    comments: req.body.comments,
                    createdBy: req.body.createdBy,
                    lastModified: today,
                    createdDate: today,
                    canDelete: false

                }) // end new todo model

                newTodo.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in todo creation')
                        console.log('todo creation result: ' + result);
                        resolve(result);
                    }
                }) // end new todo save
            }
        }) // end new todo promise
    } // end create todo function

    let createTodoState = (result) => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.title)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {

                var today = Date.now()
                let todoId = result.todoId;
                
                //let newResult = { ...result, canDelete: false  }
                console.log("the result is :::::::::::::::::::::::::::::"+ result);
                let newTodo = new TodoStateModel({
                    todoId: todoId,
                    states: [result],

                }) // end new todo model

                newTodo.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in todo state creation')
                        resolve(result)
                    }
                }) // end new todo save
            }
        }) // end new todo promise
    } // end create todo function 

    // making promise call.
    todoCreationFunction()
        .then(createTodoState)
        .then((result) => {
            let apiResponse = response.generate(false, 'New todo created by '+req.body.createdBy.userName, 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

/**
 * function to read all todos.
 */
let getAllTodos = (req, res) => {
    TodoModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Todo Controller: getAllTodo', 10)
                let apiResponse = response.generate(true, 'Failed To Find Todo Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Todo Found', 'Todo Controller: getAllTodo')
                let apiResponse = response.generate(true, 'No Todo Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Todo Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all todos

//delete todo
let deleteTodo = (req, res) => {
    let deleteTodoinSchema = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.todoId)) {

                console.log('todoId should be passed')
                let apiResponse = response.generate(true, 'todoId is missing', 403, null)
                reject(apiResponse)
            } else {

                TodoModel.remove({ 'todoId': req.params.todoId }, (err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(result)) {
                        console.log('Todo Not Found.')
                        let apiResponse = response.generate(true, 'Todo Not Found.', 404, null)
                        reject(apiResponse)
                    } else {
                        console.log('Todo Deletion Success')
                        let apiResponse = response.generate(false, 'Todo Deleted Successfully', 200, result)
                        resolve(apiResponse)
                    }
                })
            }
        })
    }

    let deleteTodoStateinSchema = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.todoId)) {

                console.log('todoId should be passed')
                let apiResponse = response.generate(true, 'todoId is missing', 403, null)
                reject(apiResponse)
            } else {

                TodoStateModel.remove({ 'todoId': req.params.todoId }, (err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(result)) {
                        console.log('Todo Not Found.')
                        let apiResponse = response.generate(true, 'Todo Not Found.', 404, null)
                        reject(apiResponse)
                    } else {
                        console.log('Todo Deletion Success')
                        let apiResponse = response.generate(false, 'Todo State Deleted Successfully', 200, result)
                        resolve(apiResponse)
                    }
                })
            }
        })
    }

    deleteTodoinSchema()
        .then(deleteTodoStateinSchema)
        .then((result) => {
            let apiResponse = response.generate(false, "A todo was deleted by "+req.body.userName, 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

/**
 * function to read single Todo.
 */
let viewByTodoId = (req, res) => {

    if (check.isEmpty(req.params.todoId)) {

        console.log('todoId should be passed')
        let apiResponse = response.generate(true, 'todoId is missing', 403, null)
        res.send(apiResponse)
    } else {

        TodoModel.findOne({ 'todoId': req.params.todoId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Todo Not Found.')
                let apiResponse = response.generate(true, 'Todo Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Todo found successfully", "TodoController:ViewTodoById", 5)
                let apiResponse = response.generate(false, 'Todo Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}


/**
 * function to edit Todo by admin.
 */
let editTodo = (req, res) => {
    let editTodoinSchema = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.todoId)) {

                console.log('todoId should be passed')
                let apiResponse = response.generate(true, 'todoId is missing', 403, null)
                res.send(apiResponse)
            } else {

                let options = req.body;
                console.log(options);
                TodoModel.update({ 'todoId': req.params.todoId }, options, { multi: true }).exec((err, result) => {

                    if (err) {

                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(result)) {

                        console.log('Todo Not Found.')
                        let apiResponse = response.generate(true, 'Todo Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        console.log('Todo Edited Successfully')
                        let apiResponse = response.generate(false, 'Todo Edited Successfully.', 200, result)
                        resolve(apiResponse)
                    }
                })
            }
        })
    }

    let addTodoState = () => {
        console.log("\nin addTodoState")
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.todoId)) {

                console.log('todoId should be passed')
                let apiResponse = response.generate(true, 'todoId is missing', 403, null)
                reject(apiResponse)
            } else {
                console.log("options" + req.body + "\nreqtodoid" + req.params.todoId);
                let options = req.body;
                console.log(options);
                TodoStateModel.updateOne({ 'todoId': req.params.todoId }, { $push: { states: options } })
                    .exec((err, result) => {

                        if (err) {

                            console.log('Error Occured.')
                            logger.error(`Error Occured : ${err}`, 'Database', 10)
                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                            reject(apiResponse)
                        } else if (check.isEmpty(result)) {

                            console.log('Todo Not Found.')
                            let apiResponse = response.generate(true, 'Todo Not Found', 404, null)
                            reject(apiResponse)
                        } else {
                            console.log('Todo state pushed Successfully')
                            let apiResponse = response.generate(false, 'Todo state pushed Successfully.', 200, result)
                            resolve(apiResponse)
                        }
                    })
            }
        })
    }

    // making promise call.
    editTodoinSchema()
        .then(addTodoState)
        .then((result) => {
            let apiResponse = response.generate(false, "Todo with title '"+req.body.title+"' was edited by "+req.body.editedBy.userName, 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}


let getTodosByCreatedId = (req, res) => {
    TodoModel.find({ 'createdBy.userId': req.params.userId })
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Todo Controller: getAllTodo', 10)
                let apiResponse = response.generate(true, 'Failed To Find Todo Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Todo Found', 'Todo Controller: getAllTodo')
                let apiResponse = response.generate(true, 'No Todo Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Todo Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all todos

let getFriendsTodos = (req, res) => {
    TodoModel.find({ 'createdBy.userId': { $in: req.body } })
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Todo Controller: getAllTodo', 10)
                let apiResponse = response.generate(true, 'Failed To Find Todo Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Todo Found', 'Todo Controller: getAllTodo')
                let apiResponse = response.generate(true, 'No Todo Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Todo Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all todos

let undoTodoState = (req, res) => {

    let deleteTodoStateTop = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.todoId)) {

                console.log('todoId should be passed')
                let apiResponse = response.generate(true, 'todoId is missing', 403, null)
                reject(apiResponse)
            } else {

                let options = req.body;
                console.log(options);
                TodoStateModel.update({ 'todoId': req.params.todoId, 'states.canDelete': true }, { $pop: { states: 1 } })
                    .exec((err, result) => {

                        if (err) {

                            console.log('Error Occured.')
                            logger.error(`Error Occured : ${err}`, 'Database', 10)
                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                            reject(apiResponse)
                        } else if (check.isEmpty(result)) {

                            console.log('Todo Not Found.')
                            let apiResponse = response.generate(true, 'Todo Not Found', 404, null)
                            reject(apiResponse)
                        } else {
                            console.log('the poped element is:' + result)
                            let apiResponse = response.generate(false, 'Todo Current State removed Successfully.', 200, result)
                            resolve(apiResponse)
                        }
                    })
            }
        })
    }

    let readTodoState = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.todoId)) {

                console.log('todoId should be passed')
                let apiResponse = response.generate(true, 'todoId is missing', 403, null)
                res.send(apiResponse)
            } else {

                let options = req.body;
                console.log(options);
                TodoStateModel.find({ 'todoId': req.params.todoId }, { 'states': { '$slice': -1 }, todoId: 0 })
                    .exec((err, result) => {
                        if (err) {

                            console.log('Error Occured.')
                            logger.error(`Error Occured : ${err}`, 'Database', 10)
                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                            reject(apiResponse)
                        } else if (check.isEmpty(result)) {

                            console.log('Todo Not Found.')
                            let apiResponse = response.generate(true, 'Todo Not Found', 404, null)
                            reject(apiResponse)
                        } else {
                            console.log('Todo State Data Found Successfully: ' + result)
                            let apiResponse = response.generate(false, 'Todo State Data Found Successfully', 200, result)
                            resolve(result)
                        }
                    })
            }
        })
    }


    let editTodoinSchema = (result) => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.todoId)) {

                console.log('todoId should be passed')
                let apiResponse = response.generate(true, 'todoId is missing', 403, null)
                reject(apiResponse)
            } else {

                const options = result.map((data) => {
                    return data.states.map(mappedResult => mappedResult)
                });
                const finalOption = options[0][0];
                //console.log('todo final edited value'+result);
                console.log('finaal object', finalOption);
                if (finalOption != undefined) {
                    TodoModel.update({ 'todoId': req.params.todoId }, finalOption, { multi: true }).exec((err, result) => {

                        if (err) {

                            console.log('Error Occured.')
                            logger.error(`Error Occured : ${err}`, 'Database', 10)
                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                            reject(apiResponse)
                        } else if (check.isEmpty(result)) {

                            console.log('Todo Not Found.')
                            let apiResponse = response.generate(true, 'Todo Not Found', 404, null)
                            reject(apiResponse)
                        } else {
                            console.log('Todo Edited Successfully')
                            let userName = req.query.userName;
                            let apiResponse = response.generate(false, 'Todo edited by '+userName, 200, result)
                            resolve(apiResponse)
                        }
                    })
                }
                else {
                    console.log('Todo cant be edited beyond this!')
                    let apiResponse = response.generate(true, 'Todo cant be edited beyond this!', 500, null)
                    reject(apiResponse)
                }
            }
        })
    }

    // making promise call.
    deleteTodoStateTop()
        .then(readTodoState)
        .then(editTodoinSchema)
        .then((result) => {
            let userName = req.query.userName;
            let apiResponse = response.generate(false, 'Todo Undo successfully done by '+userName, 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        })
}


module.exports = {

    getAllTodos: getAllTodos,
    createTodo: createTodo,
    deleteTodo: deleteTodo,
    viewByTodoId: viewByTodoId,
    editTodo: editTodo,
    getTodosByCreatedId: getTodosByCreatedId,
    getFriendsTodos: getFriendsTodos,
    undoTodoState: undoTodoState
    /* viewByCategory: viewByCategory,
     viewByAuthor: viewByAuthor,
     
     
     increaseTodoView : increaseTodoView */
}// end exports