/**
 * Created by sachg on 4/15/2016.
 */
import mongoose  from 'mongoose';
var Schema = mongoose.Schema;

var statusHistory = new Schema({
  statusType: Number,
  timeStamp: {type: Date, default: Date.now},
});

module.exports = StatusHistory;
