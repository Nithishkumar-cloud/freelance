

const mongoose = require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema({
    Subject: {
        type: String,
        required: [true, 'Please enter Subject']
    },
    Cost:{
        type: String,
        // default:"male"
        required:[true,'Please choose Cost']
   },
   
    Description:{
       type: String,
        required:[true,'Please enter Short Description']
    },
    Longdes:{
        type: String,
        required:[true,'Please enter Long Description']
    },
    Username:{
        type:String
        
    },
    UserId:{
        type:String
    },
    Pincode:{
        type:String
    },
    Phone:{
        type: Number
    },
    RequestType:{
        type:String
    },
  
    createdAt :{
        type: Date,
        default: Date.now
    }
});


let requestus =mongoose.model('Requestus',userSchema);
module.exports=requestus;