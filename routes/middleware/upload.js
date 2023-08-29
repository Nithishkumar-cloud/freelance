/* global __dirname */

const path=require('path');
const multer=require('multer');

const Storage=multer.diskStorage({
  destination: function(req,file,callback){
    console.log("destination working");
    callback(null,path.join(__dirname,'..','uploads'));
    console.log("done");
  },
  filename: function(req,file,callback){
    // var ext=file.originalname.substring(file.originalname.lastIndexOf('.'));//if image.jpg it gives as extension as jpg
    // console.log(ext);
    //console.log(file.originalname);
   console.log(file);
    callback(null,Date.now()+path.extname(file.originalname));
  }
    
});

//init upload

let uploadval=multer({
    storage: Storage
});


module.exports=uploadval;