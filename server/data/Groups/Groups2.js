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
          addUser(this, new_user,GROUP_STATUS.PENDING,'joined');
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

var removeUser = function(group,group_status, removedUser,register_status){
  group.users.id(removedUser._id).remove();//TODO: not sure if this true remove subdoc technigque
  group.status = group_status;
  group.status_history.push(new History({statusType: group_status}));
  group.user_register.push(new Register({user: user2rem, status: register_status}));
  group.save(function(err){
    if(err)
      console.error(err);
    console.log("user successfully removed");
  });
}

GroupsSchema.methods.removeUserFromGroup = function(user2rem){
  var group_status = this.status;
  var group_users_count = this.users.length;

  if(this.users.includes(user2rem)){
    switch (this.status){
      case GROUP_STATUS.PENDING || GROUP_STATUS.READY:
        if(group_users_count <= 1)
          group_status = GROUP_STATUS.EMPTY;
        else
          group_status = GROUP_STATUS.PENDING;
        break;
      case GROUP_STATUS.ACTIVE || GROUP_STATUS.LESS_USERS:
            if(group_users_count <= 3 )//TODO: notify users what if group has 30 users 3 is to less calculations needed
              group_status = GROUP_STATUS.PENDING;
            else//TODO: notify users
              group_status = GROUP_STATUS.LESS_USERS;
            break;
      case GROUP_STATUS.INACTIVE || GROUP_STATUS.INACTIVE_AND_LESS_USERS:
            if(group_users_count < 1)
              group_status = GROUP_STATUS.EMPTY;
            else
              group_status = GROUP_STATUS.INACTIVE_AND_LESS_USERS;
            break;
    }
    removeUser(this,groupStatus,user2rem,'left');
  }

}

//TODO Swap users between two groups

GroupsSchema.methods.addUserToGroup2 = function(newUser){
  console.log("about to push user");
this.users.push(newUser);

  this.save(function(err,res){
    console.log('inside of save before anything');
    if(err){
      console.error(err);
    }else{
      console.log(res);
    }
  })
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
