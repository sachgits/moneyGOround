/**
 * Created by sachg on 4/10/2016.
 */
import Group from './Groups/Group';
import User from './User/User';

var sachgits = new User(1,'sachgits','sach','gits','+254736064550');
var eunicenjeri = new User(2,'eunicenjeri','eunice', 'njeri', '+254721169392');
var gracenjeri = new User(3,'gracenjeri', 'grace','njeri', '+254724821119');
var ritagichuru = new User(4,'ritagichuru','rita','gichuru', '+254701543456');
var edithwangechi = new User(5,'edithwangeci', 'edith', 'wangeci', '+254711213465');
var ruthnimmoh = new User(6,'ruthnimmoh', 'ruth','nimmoh', '0722934878');
var benjaKag = new User(7,'benkagurani', 'benjamin','kagurani', '0725895182');
var rubenkanoga = new User(8,'rubenkanoga', 'ruben', 'kanoga', '0733445500');
var mfalmeDaudi = new User(9, 'MfalmeDaudi', 'David', 'Kihungi', '0739458998');

//users ivyLahm, JoyAnn and KristineKyania will be notified when Group is fool
var ivyLahm = new User(10, 'ivyLahm', 'Ivine', 'Lahm', '0734680012');
var joyAnn = new User(11, 'joyAnn', 'Joan', 'Wachuiri', '0733106243');
var KristineKyania = new User(12, 'cristineKyania', 'Christine', 'Kyania', '0722566698');

//will be used to simulate joining group sixBySixByOne2 and FiveByFiveBy2
var MossesMunene = new User(13, 'muneshmose', 'Moses', 'Munene', '+254723012354');
//will be used to simulate joining group FiveByFiveBy2
var ShadrakNdege = new User(14, 'shaddyNdege', 'shaddy', 'Ndege', '+254721145432');

var sixUsersGrp = new List();
sixUsersGrp.addAll(sachgits,eunicenjeri,gracenjeri,ritagichuru,edithwangechi,ruthnimmoh);
var sixBySixByOne = new Group(sixUsersGrp,'6_6_1','active');

var sixUsersGrp2 = new List();
sixUsersGrp2.addAll(benjaKag,mfalmeDaudi);
var sixBySixByOne2 = new Group(sixUsersGrp,'6_6_1','pending');//mostly created by new user

var fiveUsersGrp = new List();
fiveUsersGrp.addAll(ivyLahm,joyAnn,KristineKyania);
var fiveByFiveByTwo = new Group(fiveUsersGrp, '5_5_2', 'pending');



module.exports = sixBySixByOne;
module.exports = sixBySixByOne2;
module.exports = fiveByFiveByTwo;
module.exports = MossesMunene;
module.exports = ShadrakNdege;



