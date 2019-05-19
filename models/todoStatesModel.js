const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let todoStatesSchema = new Schema(
    {
        todoId: {
            type: String,
            unique: true
        },
        states: {
            type: Array,
            default: null
        }
    }
)

mongoose.model('TodoStates', todoStatesSchema);