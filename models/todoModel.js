// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let todoSchema = new Schema(
    {
        todoId: {
            type: String,
            unique: true
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        todoDate: {
            type: Date,
            default: ''
        },
        reminderTime: {
            type: Date,
            default: ''
        },
        subtasks: {
            type: Array,
            default:null
        },
        statusSelected:{
            type: String,
            default:''
        },
        createdBy: {
            type: Object,
            default: ''
        },
        editedBy: {
            type: Object,
            default:''
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        lastModified: {
            type: Date,
            default: Date.now
        },
        comments:{
            type: Array,
            default:null
        },
        canDelete:{
            type:Boolean,
            default:true
        }
    }
)

mongoose.model('Todo', todoSchema);