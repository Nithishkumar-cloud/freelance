const express=require('express');
const {registeruser,loginuser, registeruserhelper, loginhelper,LogOutuser,changepin,sessionids, sessionidhelper, phoneupdate, percentageupdate,PinUpdate,dobupdate,Addressupdate,pinhelper,dobhelper,phonehelper,addresshelper,genhelper, read,Profession,PerAddressupdate,whatphoneupdate}=require('../controllers/authcontrollers');
const router=express.Router();
const path=require('path');
//const upload=require('../middleware/upload');
//upload.single(`data[p]`)
router.route('/register').post(registeruser);

router.route('/login').post(loginuser);

router.route('/reghelper').post(registeruserhelper);

router.route('/loghelper').post(loginhelper);

router.route('/logout').post(LogOutuser);


//session ids generator
router.route('/ids').post(sessionids);

router.route('/idshelp').post(sessionidhelper);

//profile update for helpus
router.route('/phoneupdate').post(phoneupdate);
router.route('/WhatsappPhoneUpdate').post(whatphoneupdate);
router.route('/dobupdate').post(dobupdate);
router.route('/addressupdate').post(Addressupdate);
router.route('/PermanentAddressChange').post(PerAddressupdate);
router.route('/disperupdate').post(percentageupdate);
router.route('/pinupdate').post(PinUpdate);
router.route('/profession').post(Profession);


//profile update for helpers
router.route('/phone').post(phonehelper);
router.route('/dob').post(dobhelper);
router.route('/address').post(addresshelper);
router.route('/pinupdatehelper').post(pinhelper);
router.route('/gender').post(genhelper);

//requestType

router.route('/request').post(read);


module.exports=router;
