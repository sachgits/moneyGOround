/**
 * Created by sachg on 4/9/2016.
 */
import User  from '../User/User';

import mongoose  from 'mongoose';

var GROUP_STATUS = { ACTIVE, INACTIVE, PENDING,LESS_USERS,INACTIVE_AND_LESS_USERS,EMPTY};

class Group{
  constructor(group_users,group_strategy,status){
    this.groupUsers = group_users;
    this.groupStrategy = group_strategy; //number_of_users
    this.status = status;
  }

  checkIfUserCanFitInTheGroup(user2check){
    /*
    * check amount,how long according to the group,reputation, user records needed here
     */


  }





  /*
  * WHEN user is added to group
  * if the group is full there should be triggers to notify users
  * to let them start playing
  * start date when did users select as the day they should start
  * pending date when users entered pending state
   */

  addUserToGroup(new_user){
    var user_exists = this.userExists(new_user);
    var current_no_users = this.groupUsers.length;
    var MaxNoOfUsers =  this.getNoOfUsersFrmStrategy();

    if(user_exists || (current_no_users >= MaxNoOfUsers))
      return false;//later will throw relevant error like Error User Exists or Error(maximum num of users reached)

    this.groupUsers.add(new_user);

    if(MaxNoOfUsers == this.groupUsers.length) {
      this.status = GROUP_STATUS.ACTIVE; //is the group able to expand or work at an absolute minimum
      //TODO: notify users that everthing is ready for them to start
      //TODO: move to the next stage
    }
    return true; //TODO: is it ok to return groupUsers or return status of the group
  }


  getNoOfUsersFrmStrategy(){
    var strat = this.groupStrategy.split('_');
    return strat[0];
  }

  getNoOfDaysFrmStrategy(){
    var strat = this.groupStrategy.split('_');
    return strat[1];
  }

  getIntervalsBtwnDaysFrmStrategy(){
    var strat = this.groupStrategy.split('_');
    return strat[2];
  }

  /*
  * not sure of i of data types comparisons
   */
  isGroupPending(){
    return (this.status == GROUP_STATUS.PENDING);
  }

  userExists(user){
    var user_exists = false;
    for(usr in this.groupUsers){
      if(user === usr){
        user_exists = true;
        break;
      }
    }
    return user_exists;
  }

  swapUsers(user1,user2){
    /*
    *what must happen before swap happens
    * 1. does user fit in the group
    * 2. TODO: more checks
     */
  }

  groupsTotalBalance(){
    /*
    * not sure howto go about this
     */
  }

  removeUserFromGroup(user2rem){
    /*
    **what should happen after user is out of a group
     */
    if(this.status === GROUP_STATUS.PENDING){

      this.groupUsers.remove(user2rem);
      //not sure whether to notify users
      if(this.groupUsers.length == 0)
        this.status = GROUP_STATUS.EMPTY;
      return true;
    }

    if(this.status === GROUP_STATUS.ACTIVE || this.status === GROUP_STATUS.LESS_USERS){
      this.groupUsers.remove(user2rem);
      this.status = GROUP_STATUS.LESS_USERS;
      return true;
    }
    if(this.status == GROUP_STATUS.INACTIVE_AND_LESS_USERS){
      this.groupUsers.remove(user2rem);
      return true;
    }

    if(this.status == GROUP_STATUS.EMPTY)
    return false;
  }

  removeUserFromGroup2(user2remove){
    var STATUS = this.status

    switch(STATUS){
      case GROUP_STATUS.EMPTY:
            break;
      case GROUP_STATUS.PENDING:
            this.groupUsers.remove(user2remove);
            if(this.groupUsers.length == 0)
              this.status = GROUP_STATUS.EMPTY;
            //possibly notify other users of user who has decided to get out of this group
            break;
      case GROUP_STATUS.ACTIVE || GROUP_STATUS.LESS_USERS:
            //we cannot play this game with very few users in this case 1
        this.groupUsers.remove(user2remove);
        if(this.goupUsers.length <= 2)
          this.status = GROUP_STATUS.PENDING;//put this group to pending state to many less people
        else
          this.status = GROUP_STATUS.LESS_USERS;
            break;
      case GROUP_STATUS.INACTIVE || GROUP_STATUS.INACTIVE_AND_LESS_USERS:
            this.groupUsers.remove(user2remove);
            if(this.groupUsers.length <= 2)
              this.status = GROUP_STATUS.PENDING;
            break;
      default:
            return false;

    }
  }

  groupSchedule(){
    //schedule job

  }
  createGroupSchedule(){
    
  }

}

module.exports = Group;
