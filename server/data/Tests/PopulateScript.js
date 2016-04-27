/**
 * Created by sachg on 4/19/2016.
 */
import mongoose from 'mongoose';
import Group from '../Groups/Groups2';
import User from '../User/User';

mongoose.connect('mongodb://localhost/merryGoRound');

let sachgits = new User({username:'sachgits',firstname:'Sach',lastname:'Gits',phoneNumber:'0736064550'});
var ritagichuru = new User({username:'ritagichuru',firstname:'Rita',lastname:'Gichuru',phoneNumber:'0701554054'});

var edithwangeci = new User({username:'EdithWangeci',firstname:'Edith',lastname:'Wangeci',phoneNumber:'0722345665'});

var gracenjeri = new User({username:'gracenjeri',firstname:'Grace',lastname:'njeri',phoneNumber:'0724821119'});
var austineAhonya = new User({username:'austineohonyo',firstname:'austine',lastname:'Ohonyo',phoneNumber:'073468448'});

var rubenkanoga = new User({username:'rubenkanoga',firstname:'Ruben',lastname:'kanoga',phoneNumber:'0734235341'});
var collinsInjera = new User({username:'collinsinjera',firstname:'collins',lastname:'injera',phoneNumber:'0732547600'});

var alanmaina = new User({username:'alanmaina',firstname:'allan',lastname:'maina',phoneNumber:'0723546457'}) ;
var denismathenge = new User({username:'denismathenge',firstname:'denis',lastname:'mathenge',phoneNumber:'0734456545'});

var stefwangeci = new User({username:'stefwangeci',firstname:'wangeci',lastname:'stef',phoneNumber:'076551242'});



var majegoSelfHelp = new Group({name:'MSHG',strategy:'100_10_D',
users: [sachgits,ritagichuru,edithwangeci,gracenjeri,austineAhonya,rubenkanoga,collinsInjera,alanmaina,denismathenge,stefwangeci]});

majegoSelfHelp.save(function(err){
  if(err){
    console.error(err);
  }
  console.log('success saving group');
});

setTimeout(function(){
  console.log('about to disconnect');
  mongoose.disconnect();
},5000);
