const mongoose = require('mongoose');
const validator=require('validator');

const SessionSchema = new mongoose.Schema({
    sessionIdHelper: {
        type: String
    },
    objectid :{
       type: String
    },
   createdAt :{
    type: Date,
    default: Date.now
  }
  
});




let session =mongoose.model('usersessionidshelper',SessionSchema);
module.exports=session;