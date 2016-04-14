/**
 * Created by sachg on 4/13/2016.
 */
import mongoose  from 'mongoose';
import User from '../User/User';

const GROUP_STATUS = {PENDING:0,READY: 1,ACTIVE:2,INACTIVE:3,LESS_USERS:4,EMPTY:5,INACTIVE_AND_LESS_USERS:6};

var Groups = new mongoose.Schema({
  group_strategy: {type: String, required:true},
  status : {type: Number, required:true,default: GROUP_STATUS.EMPTY,comment:'not sure if defalt should be EMPTY'},
  group_users: [{type: User,required:true}]
});

Groups.methods.getMaxUsersFrmStrategy = function(){
  return this.group_strategy.split('_')[0];
}

Groups.methods.getDaysIntervalFrmStrategy = function () {
  return this.group_strategy.split('_')[1];
}

Groups.methods.addUserToGroup = function(new_user){
  //
  var current_status = this.status;
  var user_new = null;
  var group_users_count = this.group_users.length;
  var max_users_allowed = this.getMaxUsersFrmStrategy();

  switch(status){
    case GROUP_STATUS.PENDING:
          if(this.group_users.includes(new_user))
            break;
          this.group_users.push(new_user);//what is the maximum number of users in the group that will not happen due to inhouse keeping
          user_new = this.group_users[group_users_count];//what if users have not reached this count
          if(this.group_users.length == max_users_allowed)
            this.status = GROUP_STATUS.READY; //not sure if we need Enum READY
           //group ready to start merrygoround
          break;
    case GROUP_STATUS.ACTIVE:
          break;

  }

}

Groups.methods.removeUserFromGroup = function(user2rem){

}

//TODO Swap users between two groups

Groups.methods.createGroupSchedule = function(){

}

Groups.methods.changeGroupSchedule = function(){

}

Groups.methods.changeGroupStrategy = function(){

}


