/**
 * Created by sachg on 4/15/2016.
 */
import mongoose  from 'mongoose';
var Schema = mongoose.Schema;

var GrpHistorySchema = new Schema({
  statusType: Number,
  timeStamp: {type: Date, default: Date.now},
});
var History = mongoose.model('History', GrpHistorySchema);

module.exports = History;
