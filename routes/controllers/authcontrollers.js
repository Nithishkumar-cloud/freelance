const express=require('express');
const app=express();

const usermodel=require('../models/loginreg');
const usermodelhelp=require('../models/logreghelp');
const sessionid=require('../models/sessionId');
const sessionidhelper=require('../models/sessionIdhelper');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');
const { json } = require('body-parser');

app.use(express.json());

// const localStorage=require('local- storage');

exports.registeruser=async(req,res,next)=>{
    console.log("working");
  const datas=req.body.data;
const Name = req.body.data.a;
  const Phone = req.body.data.b;
  const Whatsapp=req.body.data.q;
  // const Image=`${process.env.BACKEND_URL}/uploads/${req.file.originalname}`;
  //    console.log(Image);
//  console.log(Whatsapp);
  const Address = req.body.data.g;
  var Aadharcardnumber = req.body.data.d;
  const DisabilityType=req.body.data.h;
  const Gender = req.body.data.j;
  var sdidudidnumber = req.body.data.e;
  var Pin=req.body.data.l;
  const Dateofbirth = req.body.data.f;
   const PermanentAdd=req.body.data.m;
  console.log(PermanentAdd);
  // const img = req.body.img;
 const  Disabilityper=req.body.data.c;
 const Profession=req.body.data.k;
 const Pincode=req.body.data.pincode;
 const RequestType=req.body.data.rqtype;
 Aadharcardnumber=await bcrypt.hash(Aadharcardnumber,10);
 sdidudidnumber=await bcrypt.hash(sdidudidnumber,10);
  if (!(Name && Phone && Address && Aadharcardnumber && sdidudidnumber && Gender &&  DisabilityType && Dateofbirth && Disabilityper && Profession&& Pin&&Pincode &&RequestType&&PermanentAdd &&Whatsapp&&Image)) {
    // return next(new errorhandler('Please enter email password and name field',400));
     res.status(400).send("All fields are required");
  }
//  
 
  const user = await usermodel.create({
    Name,
    Phone,
    Address,
    PermanentAdd,
    Whatsapp,
    Gender,
    Aadharcardnumber,
    sdidudidnumber,
    Dateofbirth,
    Disabilityper,
    DisabilityType,
    Profession,
    Pincode,
    RequestType,
    Pin
  });
  const objectid=user.id;
  console.log(objectid);
  const sessionId= crypto.randomBytes(3).toString('hex');
  // console.log(sessionId);
  var ids=await sessionid.create({
       sessionId,
       objectid,
       Phone
  });
console.log(user);
res.json({user,ids});

};

  exports.loginuser=async(req,res,next)=>{
    // const Phone=req.body.logphone;
    // const Dateofbirth=req.body.logpin;
    const Phone=req.body.data.a;
    const Pin=req.body.data.b;
     console.log(Pin);
     console.log(Phone); 
//   if(!(Phone && Pin)){
//    //return next(new errorhandler('Please enter email and password',400));
//    // res.status(404).send("all fields are required");
//    res.json({msg: 'Please enter email and password'});
//   }

   //or else now we need to check the name and email data in db 
  
   const userlog=await usermodel.findOne({Phone});
    //console.log(userlog);
  
   
   if(userlog){
      //creating jwt token
      
      console.log(userlog);
      const auth=await bcrypt.compare(Pin,userlog.Pin);
      console.log(auth);
      if(auth){

        const token=jwt.sign({id: userlog.id},process.env.JWT_SECRET,{
          expiresIn:process.env.JWT_EXPIRES_TIME
       });
       console.log(token);
          //setting cookies
      //   const options={
      //   expires: new Date(Date.now()+ process.env.COOKIE_EXPIRES_TIME*24*60*60*1000),
      //   httpOnly: true
      //  }
      //  console.log(options);
       const objectid=userlog.id;
       console.log(objectid);
       const sessionId= crypto.randomBytes(3).toString('hex');
       // console.log(sessionId);
       var ids=await sessionid.create({
            sessionId,
            objectid,
            Phone
       });
       res.json({userlog,ids,token,msg:""});
      }
      else{
        res.status(400).send("Incorrect password");
      }
 }
  
   else{
      //return next(new errorhandler('Invalid email or password',400));
      res.json({msg:"Incorrect PhoneNumber or Pin"});
   }

  };

//for helper

exports.registeruserhelper=async(req,res,next)=>{

  // const Name = req.body.name;
  // const Phone = req.body.phone;
  // const Address = req.body.area;
  // const Gender = req.body.btnradio;
  // const Dateofbirth = req.body.dob;
  //const data=req.body.data;
  //console.log(data);
  const Name = req.body.data.name;
  const Phone = req.body.data.phone;
  const Address = req.body.data.address;
  const Gender = req.body.data.gender;
  const Dateofbirth = req.body.data.dob;
  const Pin=req.body.data.pin;
  
  const PersonalId=req.body.data.type;
  const RequestTypeHelp=req.body.data.requesttypehelp;
  const Pincode=req.body.data.pincode;
  if (!(Name &&Phone&& Address&&Dateofbirth&&Pin&&PersonalId&&RequestTypeHelp) ) {
    //return next(new errorhandler('Please enter email password and name field',400));
    res.status(401).send("Enter all fields");
  }
  const user = await usermodelhelp.create({
    Name,
    Phone,
    Address,
    Gender,
    Dateofbirth,
    Pin,
    Pincode,
    PersonalId,
    RequestTypeHelp
  });
  const objectid=user.id;
  console.log(objectid);
  const sessionIdHelper= crypto.randomBytes(4).toString('hex');
   console.log(sessionIdHelper);
  var ids=await sessionidhelper.create({
       sessionIdHelper,
       objectid,
       Phone
  });

res.json({user,ids});
};



exports.loginhelper=async(req,res,next)=>{
  const users=req.body.data;
  console.log(users);
  // let errors=[];
  const Phone=req.body.data.a;
  const Pin=req.body.data.b; 
  console.log(Pin);
 
// if(!(Phone && Pin)){
//   //if name or email empty ah iruntha error varum
//   //return next(new errorhandler('Please enter email and password',400));
//  //  res.status(400).send("Please enter Phone number and Pin");
//  // errors.push({message: "Please enter email and password"});
//  // res.json({errors:"Please enter  Phone and Pin"});
//   res.status(400);
// }

 const userlog=await usermodelhelp.findOne({Phone});
 //console.log(userlog);


if(userlog){
   //creating jwt token
   
   console.log(userlog);
   const auth=await bcrypt.compare(Pin,userlog.Pin);
   console.log(auth);
   if(auth){

    const token=jwt.sign({id: userlog.id},process.env.JWT_SECRET,{
      expiresIn:process.env.JWT_EXPIRES_TIME
   });
   console.log(token);
      
    
    const objectid=userlog.id;
    //console.log(objectid);
    const sessionIdHelper= crypto.randomBytes(3).toString('hex');
    // console.log(sessionId);
    var ids=await sessionidhelper.create({
         sessionIdHelper,
         objectid,
         Phone
    });
    res.json({userlog,ids,token,message:""});
   }
   else{
    
     res.status(400).send("Incorrect password");
   }
}

else{
   //return next(new errorhandler('Invalid email or password',400));
   res.json({message:"Invalid PhoneNumber or Pin"});
}


};

//logout for helpus
exports.LogOutuser=async(req,res,next)=>{
  const sessionId=req.body.id;
  console.log(sessionId);
  const data=await sessionid.deleteOne({sessionId});
  res.json({logoutmsg:"LoggedOut Successfully"});
};
//logout for helper

exports.LogOutuserhelper=async(req, res, next)=>{
  const sessionIdHelper=req.body.idHelper;
  const data=await sessionidhelper.deleteOne({sessionIdHelper});
  res.json({logoutmsg:"LoggedOut Successfully"});
};


//sessionid for helpus
exports.sessionids=async(req, res, next) => {

  const sessionId=req.body.id;
  console.log(sessionId);
  const session=await sessionid.findOne({sessionId});
  console.log(session);
  if(session){
    const _id=session.objectid;
     console.log(_id);
    const values=await usermodel.findOne({_id});
      console.log(values);
    if(values){
      res.json({values});
    }
    else{
      //return next(new errorhandler('Invalid ID',400));
      res.status(400).send("error");
    }
  }
  else{
    //return next(new errorhandler('Invalid session id',400));
    res.status(400).send("wrong");
  }
};

//sessionid for helper
exports.sessionidhelper=async(req,res,next)=>{
  const sessionIdHelper=req.body.id;
  const session=await sessionidhelper.findOne({sessionIdHelper:sessionIdHelper});
  if(session){
    const _id=session.objectid;
    const values=await usermodelhelp.findOne({_id:_id});
    if(values){
      res.json({values});
    }
    else{
      res.status(400).send("error");
    }
  }
  else{
    res.status(400).send("wrong");
  }
};

//helpus updates

exports.phoneupdate=async(req,res,next)=>{
  const data=req.body.data;
  const Phone=req.body.data.Phone;
  const sessionId=req.body.data.sessionid;
  //console.log(data);
  //console.log(Phone);
  const session=await sessionid.findOne({sessionId});
 // console.log(session);
  const _id=session.objectid;
  //console.log(_id);
  const userlog=await usermodel.findOne({_id});
  //console.log(userlog);
  if(userlog){
    const user=await usermodel.findByIdAndUpdate(userlog._id,{Phone},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true//create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    //console.log(user);
    res.json({user,phonemsg:"Phonenumber Updated Successfully"});
  }
  else{
    res.status(404).send("error");
  }
};

exports.whatphoneupdate=async(req,res,next)=>{
  const data=req.body.data;
  const Whatsapp=req.body.data.WhatsappPhone;
  const sessionId=req.body.data.sessionid;
  //console.log(data);
  //console.log(Phone);
  const session=await sessionid.findOne({sessionId});
 // console.log(session);
  const _id=session.objectid;
  //console.log(_id);
  const userlog=await usermodel.findOne({_id});
  //console.log(userlog);
  if(userlog){
    const user=await usermodel.findByIdAndUpdate(userlog._id,{Whatsapp},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true//create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    //console.log(user);
     res.json({user,whatmsg:"Whatsapp number Updated Successfully"});
  }
  else{
    res.status(404).send("error");
  }
};

exports.dobupdate=async(req,res,next)=>{
  const data=req.body.data;
  const Dateofbirth=req.body.data.dob;
  const sessionId=req.body.data.sessionid;
  const session=await sessionid.findOne({sessionId});
  const _id=session.objectid;
  const userlog=await usermodel.findOne({_id});
  if(userlog){
    const user=await usermodel.findByIdAndUpdate(userlog._id,{Dateofbirth},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true//create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    res.json({user,dobmsg:"DateofBirth Updated Successfully"});
  }
  else{
    res.status(404).send("error");
  }
};

exports.Addressupdate=async(req,res,next)=>{
  
  const Address=req.body.data.address;
  const sessionId=req.body.data.sessionid;
  const session=await sessionid.findOne({sessionId});
  const _id=session.objectid;
  const userlog=await usermodel.findOne({_id});
  if(userlog){
    const user=await usermodel.findByIdAndUpdate(userlog._id,{Address},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true//create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    res.json({user,cuaddmsg:"Current Address Updated Successfully"});
  }
  else{
    // res.status(404).send("error");
    res.json({msg:"Error in changing the address"});
  }
};

exports.PerAddressupdate=async(req,res,next)=>{
  
  const PermanentAdd=req.body.data.peraddress;
  const sessionId=req.body.data.sessionid;
  const session=await sessionid.findOne({sessionId});
  const _id=session.objectid;
  const userlog=await usermodel.findOne({_id});
  if(userlog){
    const user=await usermodel.findByIdAndUpdate(userlog._id,{PermanentAdd},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true//create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    res.json({user,permanentaddmsg:"Permanent Address Updated Successfully"});
  }
  else{
    // res.status(404).send("error");
    res.json({msg:"Error in changing the address"});
  }
};

exports.percentageupdate=async(req,res,next)=>{
  const data=req.body.data;
  const Disabilityper=req.body.data.Disabilityper;
  const sessionId=req.body.data.sessionid;
  const session=await sessionid.findOne({sessionId});
  const _id=session.objectid;
  const userlog=await usermodel.findOne({_id});
  if(userlog){
    const user=await usermodel.findByIdAndUpdate(userlog._id,{Disabilityper},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true//create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    res.json({user,percentagemsg:"Disability Percentage Updated Successfully"});
  }
  else{
    res.status(404).send("error");
  }
};
exports.PinUpdate=async(req,res,next)=>{
  const data=req.body.data;
  const oldpass=req.body.data.oldpass;
  const newpass=req.body.data.newpass;
  const sessionId=req.body.data.sessionid;
  const session=await sessionid.findOne({sessionId});
  const _id=session.objectid;
  const userlog=await usermodel.findOne({_id});
  if(userlog){
    let hashpass=await bcrypt.compare(oldpass,userlog.Pin);
    console.log(hashpass);
    if(hashpass){
      userlog.Pin=newpass;
      await userlog.save();
      res.json({pinmsg:"Successfully changed your PIN Safe to close"});
    }
    
    
  }
  else{
    res.status(404).send("error");
  }
};

exports.Profession=async(req,res,next) => {
  const Profession=req.body.data.profession;
  const sessionId=req.body.data.sessionid;
  const session=await sessionid.findOne({sessionId});
  const _id=session.objectid;
  const userlog=await usermodel.findOne({_id});
  if(userlog){
    const user=await usermodel.findByIdAndUpdate(userlog._id,{Profession},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true//create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    res.json({user,professionmsg:"Profession Updated Successfully"});
  }
  else{
    res.status(404).send("error");
  }
};



//Helper area starts
exports.phonehelper=async(req,res,next)=>{
  const data=req.body.data;
  const Phone=req.body.data.Phone;
  const sessionIdHelper=req.body.data.sessionid;
  //console.log(data);
  //console.log(Phone);
  const session=await sessionidhelper.findOne({sessionIdHelper});
 // console.log(session);
  const _id=session.objectid;
  console.log(_id);
  const userlog=await usermodelhelp.findOne({_id});
  console.log(userlog);
  if(userlog){
    const user=await usermodelhelp.findByIdAndUpdate(userlog._id,{Phone},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true //create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    console.log(user);
    res.json({user});
  }
  else{
    res.status(404).send("error");
  }
};

exports.dobhelper=async(req,res,next)=>{
  const data=req.body.data;
  const Dateofbirth=req.body.data.dob;
  const sessionIdHelper=req.body.data.sessionid;
  const session=await sessionidhelper.findOne({sessionIdHelper});
  const _id=session.objectid;
  const userlog=await usermodelhelp.findOne({_id});
  if(userlog){
    const user=await usermodelhelp.findByIdAndUpdate(userlog._id,{Dateofbirth},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true //create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    res.json({user});
  }
  else{
    res.status(404).send("error");
  }
};

exports.addresshelper=async(req,res,next)=>{
  
  const Address=req.body.data.address;
  const sessionIdHelper=req.body.data.sessionid;
  const session=await sessionidhelper.findOne({sessionIdHelper});
  const _id=session.objectid;
  const userlog=await usermodelhelp.findOne({_id});
  if(userlog){
    const user=await usermodelhelp.findByIdAndUpdate(userlog._id,{Address},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true //create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    res.json({user});
  }
  else{
    res.status(404).send("error");
  }
};

exports.genhelper=async(req,res,next)=>{
  
  const Gender=req.body.data.gender;
  const sessionIdHelper=req.body.data.sessionid;
  const session=await sessionidhelper.findOne({sessionIdHelper});
  const _id=session.objectid;
  const userlog=await usermodelhelp.findOne({_id});
  if(userlog){
    const user=await usermodelhelp.findByIdAndUpdate(userlog._id,{Gender},{
      new:true,//so ipo palaya data return panna kudathu new ah update panna data va than return pannanum so new use pandrom
        runValidators:true //create pandrapa athu validate pannirum but athe mathi update pandrapa validate pannanum avanga ena kuduthalum accept pandramathi iruka kudathu so athan itha use pandrom
    });
    res.json({user});
  }
  else{
    res.status(404).send("error");
  }
};

exports.pinhelper=async(req,res,next)=>{
  const data=req.body.data;
  const oldpass=req.body.data.oldpass;
  const newpass=req.body.data.newpass;
  const sessionIdHelper=req.body.data.sessionid;
  const session=await sessionidhelper.findOne({sessionIdHelper});
  const _id=session.objectid;
  const userlog=await usermodelhelp.findOne({_id});
  if(userlog){
    let hashpass=await bcrypt.compare(oldpass,userlog.Pin);
    console.log(hashpass);
    if(hashpass){
      userlog.Pin=newpass;
      await userlog.save();
      res.json({msg:"Successfully changed your PIN Safe to close"});
    }
    
    
  }
  else{
    res.status(404).send("error");
  }
};

exports.read=async(req, res, next)=>{
  const sessionid=req.body.details.storage;
  console.log(sessionid);
  const type=req.body.details.type;
  console.log(type);

};
