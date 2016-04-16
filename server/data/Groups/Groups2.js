/**
 * Created by sachg on 4/13/2016.
 */
import mongoose  from 'mongoose';
import User from '../User/User';
import StatusHistory from './StatusHistory';
import GroupRegister from './UserRegister';

const GROUP_STATUS = {PENDING:0,READY: 1,ACTIVE:2,INACTIVE:3,LESS_USERS:4,EMPTY:5,INACTIVE_AND_LESS_USERS:6};

var Groups = new mongoose.Schema({
  group_name: String,
  group_strategy: {type: String, required:true,match: /\*/},
  status : {type: Number, required:true,default: GROUP_STATUS.PENDING,comment:'not sure if default should be EMPTY'},
  timeCreated:{type: Date,default:Date.now},
  group_users: [{type: User,required:true,comments:'users in this group'}],
  status_history: [{type: StatusHistory}],
  user_register: [{type: GroupRegister}]
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
  var max_users_allowed = this.getMaxUsersFrmStrategy();//TODO casting form string to int may be needed here watch carefully
  if(this.group_users.includes(new_user) || group_users_count >= max_users_allowed)
    return false;

  switch(current_status){ //make sure that status is of type group_status.PENDING|ACTIVE|INACTIVE not just group_status object
    case GROUP_STATUS.PENDING:
          this.group_users.push(new_user);//what is the maximum number of users in the group that will not happen due to inhouse keeping
          user_new = this.group_users[group_users_count];//what if users have not reached this count
          if(this.group_users.length == max_users_allowed)
            this.status = GROUP_STATUS.READY; //not sure if we need Enum READY
            //group ready to start merrygoround notify users
          break;
    case GROUP_STATUS.ACTIVE: //if the group allows expansion why not keep adding
          break;
    case GROUP_STATUS.INACTIVE: //why would you add a user to an inactive group
          break;
    case GROUP_STATUS.LESS_USERS:
          this.group_users.push(new_user);
          user_new = this.group_users[group_users_count];
          if(this.group_users.length == max_users_allowed)
            this.status = GROUP_STATUS.ACTIVE;
          break;

  }

  if(user_new.isNew) {
    this.status_history.push({statusType:this.status});
    this.user_register.push({user:new_user,status:'new user'});
    this.save(function (err) {
      if (err)
        console.error(err);
      console.log("new user saved");
    });
  }

}

Groups.methods.removeUserFromGroup = function(user2rem){
  var current_status = this.status;
  var group_users_count = this.group_users.length;

  if(this.group_users.includes(user2rem)){
    switch (current_status){
      case GROUP_STATUS.ACTIVE || GROUP_STATUS.LESS_USERS:
            this.group_users.id(user2rem._id).remove();//TODO: not sure about this removal method maybe a placeholder
            if(group_users_count <=3 )//TODO: notify users
              this.status = GROUP_STATUS.PENDING; //TODO: what happens when a group is in pending situation while merryGoRound was on
            else//TODO: notify users
              this.status = GROUP_STATUS.LESS_USERS;//TODO: does this mean the strategy might change
            break;
      case GROUP_STATUS.PENDING || GROUP_STATUS.READY:
            this.group_users.id(user2rem._id).remove();//TODO: not sure about this removing technigue
            if(group_users_count <= 1)
              this.status = GROUP_STATUS.EMPTY; //what do we do with empty group //return cash to owners
            //how do we tell which users were here previously so that we might return their cash
            if(this.status == GROUP_STATUS.READY)
              this.status = GROUP_STATUS.PENDING;
            break;
      case GROUP_STATUS.INACTIVE || GROUP_STATUS.INACTIVE_AND_LESS_USERS:
            this.group_users.id(user2rem._id).remove(); //TODO: not sure about this remove
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

Groups.methods.createGroupSchedule = function(){

}

Groups.methods.changeGroupSchedule = function(){

}

Groups.methods.changeGroupStrategy = function(){

}

/*
*think of a function that can check groups analyze users to place them in groups that have less users so that things keep
 * moving
 */


