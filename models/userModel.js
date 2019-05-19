'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: 'Jaigurudev!'
  },
  email: {
    type: String,
    default: '91'
  },
  countryCode:{
    type: Number,
    default: 0
  },
  mobileNumber: {
    type: Number,
    default: 0
  },
  createdOn :{
    type:Date,
    default:""
  },
  sentRequests:[{
    userId: {type: String,  default: '',unique: true},
    userName: {type: String, default: ''},
    }],
    receivedRequests: [{
    userId: {type: String,  default: '',unique: true},
    userName: {type: String, default: ''}
    }],
    friendsList: [{
    friendId: {type: String,  default: '',unique: true},
    friendName: {type: String, default: ''}
    }],
    totalRequest: {
      type: Number,
       default:0
      }


})


mongoose.model('User', userSchema);