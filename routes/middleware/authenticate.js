const jwt=require('jsonwebtoken');
const usermodel=require('../models/logreg');


exports.loginauthentication=async(req,res,next)=>{
    const {token} =req.cookies;

    if(!token){
         console.log("error");
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await usermodel.findById(decoded.id); //so inge just const user nu soli edutha antha function matum than access panna mudiyum atha namma request pandrom req.user nu and also enaku user data venum so router la function use pandren 
    //console.log(req.user);
    // return next();//if it is verified then it will pass to get product.js

}
