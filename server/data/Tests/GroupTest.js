/**
 * Created by sachg on 4/19/2016.
 */
import mongoose from 'mongoose';
import Group from '../Groups/Groups2';
import User from '../User/User';

mongoose.connect('mongodb://localhost/merryGoRound');

let karanjamunene = new User({username:'crisKirubi',firstname:'cris',lastname:'kirubi',phoneNumber:'0725555182'});
let fredmunene = new User({username:'cristinekyania', firstname:'cristine',lastname:'kyania',phoneNumber:'0734560109'});

let newGroup =new Group({name:'toyoyo',strategy:'1000_10_D',users:[fredmunene]});

console.log(newGroup);

//TODO: lets check why this is not working
newGroup.addUserToGroup2(karanjamunene);

setTimeout(function(){
  console.log('finished mongoDB business about to log out');
  mongoose.disconnect();
},5000);
