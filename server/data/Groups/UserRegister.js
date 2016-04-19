/**
 * Created by sachg on 4/15/2016.
 */
import User from '../User/User';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var groupRegister = new Schema({
  user: {type: Schema.Types.ObjectId, ref:User},
  timeStamp:{type: Date,default:Date.now},
  status:{type: String, comment:'is it that user joined Group or left Group'}
});

var Register = mongoose.model('Register', groupRegister);

module.exports = groupRegister;
module.exports = Register;

