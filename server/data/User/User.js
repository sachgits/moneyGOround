/**
 * Created by sachg on 4/8/2016.
 */

import mongoose  from 'mongoose';
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {type: String, required:true},
  firstname: String,
  lastname:String,
  phoneNumber: String
});

let User = mongoose.model('User', UserSchema);
module.exports = User;
