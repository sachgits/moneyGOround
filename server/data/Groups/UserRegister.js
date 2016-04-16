/**
 * Created by sachg on 4/15/2016.
 */
import User from '../User/User';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var GroupRegister = new Schema({
  user: User,
  timeStamp:{type: Date,default:Date.now},
  status:{type: String, comment:'is it that user joined Group or left Group'}
});

module.exports = GroupRegister;


