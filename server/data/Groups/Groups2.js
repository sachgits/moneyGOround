/**
 * Created by sachg on 4/13/2016.
 */
import mongoose  from 'mongoose';
import User from '../User/User';
import History from './StatusHistory';
import Register from './UserRegister';

const GROUP_STATUS = {PENDING:0,READY: 1,ACTIVE:2,INACTIVE:3,LESS_USERS:4,EMPTY:5,INACTIVE_AND_LESS_USERS:6};

var GroupsSchema = new mongoose.Schema({
  name: String,
  strategy: {type: String, required:true},
  status : {type: Number, required:true,default: GROUP_STATUS.PENDING,comment:'what is the group status of users'},
  timeCreated:{type: Date,default:Date.now},
  users: [{type: mongoose.Schema.Types.ObjectId, ref: User}],
  status_history: [{type: mongoose.Schema.Types.ObjectId, ref: 'History'}],
  user_register: [{type: mongoose.Schema.Types.ObjectId, ref: 'Register'}]
});

GroupsSchema.set('toJSON',{getters:true});

GroupsSchema.methods.getMaxUsersFrmStrategy = function(){
  return this.strategy.split('_')[1];
}

GroupsSchema.methods.getDaysIntervalFrmStrategy = function () {
  return this.strategy.split('_')[2];
}

GroupsSchema.methods.addUserToGroup = function(new_user){
  //
  if(this.status == GROUP_STATUS.INACTIVE || this.status == GROUP_STATUS.INACTIVE_AND_LESS_USERS || this.status == GROUP_STATUS.READY ||
  this.status == GROUP_STATUS.ACTIVE || this.users.includes(new_user))//TODO: will throw relevant exeception later
    return false;
  switch(this.status){
    case GROUP_STATUS.PENDING:
          addUser(this, new_user,GROUP_STATUS.READY,'joined');
            //TODO: READY STATUS
            // deter fraudstars from waiting their turns then walking  out by
            //first round is played where no one gets cash from there we go to ACTIVE
          break;
    case GROUP_STATUS.LESS_USERS:
          addUser(this,new_user,GROUP_STATUS.ACTIVE,'joined');
      // TODO: LESS_USERS STATUS
      //does the user fit to join the group $mulla$ wise
      break;
  }
}

var addUser = function(group,new_user, group_status,register_status){
  group.users.push(new_user);
  if(group.users.length == group.getMaxUsersFrmStrategy()) {
    group.status = group_status;
    group.status_history.push(new History({statusType: group_status}));
    group.user_register.push(new Register({user: new_user, status: register_status}));
    //TODO: READY STATUS
    // deter fraudstars from waiting their turns then walking  out by
    //first round is played where no one gets cash from there we go to ACTIVE
  }
    group.save(function (err, res) {
      if (err) {
        console.error(err);
      }
      console.log(res);
    });

}

GroupsSchema.methods.removeUserFromGroup = function(user2rem){
  var current_status = this.status;
  var group_users_count = this.users.length;

  if(this.users.includes(user2rem)){
    switch (current_status){
      case GROUP_STATUS.PENDING || GROUP_STATUS.READY:
        this.users.id(user2rem._id).remove();//TODO: not sure about this removing technigue
        if(group_users_count <= 1)
          this.status = GROUP_STATUS.EMPTY; //what do we do with empty group //return cash to owners
        //how do we tell which users were here previously so that we might return their cash
        if(this.status == GROUP_STATUS.READY)
          this.status = GROUP_STATUS.PENDING;
        break;
      case GROUP_STATUS.ACTIVE || GROUP_STATUS.LESS_USERS:
            this.users.id(user2rem._id).remove();//TODO: not sure about this removal method maybe a placeholder
            if(group_users_count <=3 )//TODO: notify users
              this.status = GROUP_STATUS.PENDING; //TODO: what happens when a group is in pending situation while merryGoRound was on
            else//TODO: notify users
              this.status = GROUP_STATUS.LESS_USERS;//TODO: does this mean the strategy might change
            break;
      case GROUP_STATUS.INACTIVE || GROUP_STATUS.INACTIVE_AND_LESS_USERS:
            this.users.id(user2rem._id).remove(); //TODO: not sure about this remove
            if(group_users_count <= 1)
              this.status = GROUP_STATUS.EMPTY;
            else
              this.status = GROUP_STATUS.INACTIVE_AND_LESS_USERS;
            break;
    }
    this.save(function(err){//not sure if model instance has this.save function
      if(err)
        console.error(err);
    })
  }

}

//TODO Swap users between two groups

GroupsSchema.methods.createGroupSchedule = function(){

}

GroupsSchema.methods.changeGroupSchedule = function(){

}

GroupsSchema.methods.changeGroupStrategy = function(){

}

/*
*think of a function that can check groups analyze users to place them in groups that have less users so that things keep
 * moving
 */
const Group = mongoose.model('Groups', GroupsSchema);
export default Group;
