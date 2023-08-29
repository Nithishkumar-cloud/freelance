const mongoose = require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Please enter name']
    },
    Gender:{
        type: String,
        // default:"male"
        required:[true,'Please choose gender']
   },
    Phone: { 
        type: Number,
        required:[true,'Please enter Number'],
        unique: true
     },
     Whatsapp: { 
       type: Number,
       required:[true,'Please enter whatsapp number']
     },
    Address:{
       type: String,
        required:[true,'Please enter address']
    },
    PermanentAdd:{
        type: String,
        required:[true,'Please enter Permanent Address']
    },
    Aadharcardnumber:{
        type: String,
        required:[true,'Please enter aadharcard number'],
        unique: true
    },
    sdidudidnumber:{
       type: String,
       required:[true,'Please enter sdidudid number'],
       unique: true
    },
    DisabilityType:{
       type: String,
         required:[true,'Please enter Disability Type']
    },
    Disabilityper:{ 
         type: String,
          required:[true,'Please enter percentage']
    },
    Dateofbirth:{
        type: String,
         required:[true,'please enter date of birth']
    },
    Profession:{
        type:String,
        required:[true,'Please enter profession']
    },
    RequestType:{
        type:String,
        required:[true,'Please enter request type']
    },
    Image:{
        type: String    
    },
    Pincode:{
        type: String,
        required:[true,'Please enter Pincode']
    },
    Pin:{
        type:String,
        required:[true,'Please enter pin']
    },
    createdAt :{
        type: Date,
        default: Date.now
    }
});
userSchema.pre('save',async function(next){//pre function will do the work first  ithu namma register la save or button click panna work nadakuramathi pandrapa intha vela pannanum
    
     this.Pin=await bcrypt.hash(this.Pin, 10);
    next();
});





let model =mongoose.model('Helpus',userSchema);
module.exports=model;