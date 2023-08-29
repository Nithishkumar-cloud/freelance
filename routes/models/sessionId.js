const mongoose = require('mongoose');
const validator=require('validator');

const SessionSchema = new mongoose.Schema({
    sessionId: {
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




let session =mongoose.model('usersessionids',SessionSchema);
module.exports=session;