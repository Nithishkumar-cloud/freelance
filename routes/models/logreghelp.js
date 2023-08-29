const mongoose = require('mongoose');
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Please enter name']
    },
    Gender:{
        type: String,
        required:[true,'Please choose gender']
   },

    Phone: { 
        type: Number,
        required:[true,'Please enter number']
     },
    Address:{
       type: String,
       required:[true,'Please enter address']
    },
    Dateofbirth:{
        type: String,
        required:[true,'please enter date of birth']
    },
    PersonalId:{
        type: String,
        required:[true,'Please enter personal ID']
    },
    Pincode:{
        type: String,
        required:[true,'Please enter Pincode']
    },
    RequestTypeHelp:{
        type:String,
        required:[true,'Please enter request type']
    },
    Pin:{
        type: String,
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






let model =mongoose.model('Helpers',userSchema);
module.exports=model;