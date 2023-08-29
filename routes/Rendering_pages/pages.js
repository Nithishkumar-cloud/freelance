/* global __dirname */

const express=require('express');
const app=express();
const path=require('path');
const bodyparser=require('body-parser');
const ejs = require('ejs');
app.use(bodyparser.urlencoded({ extended: true }));


const router=express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/components/registerloginus/index.html"));  
  });
router.get('/helper',(req, res) => {
  res.sendFile(path.join(__dirname, "../../public/components/registerloginhelper/regfor helper.html"));
});

router.get('/profile', (req, res) => {
  
  res.sendFile(path.join(__dirname, "../../public/components/profile/profile.html"));
  
});

router.get('/helperprofile',(req, res) => {
  res.sendFile(path.join(__dirname, "../../public/components/profile/profilehelper.html"));
});

router.get('/changepin',(req,res) => {
  res.sendFile(path.join(__dirname, "../../public/components/change pin/changepin.html"));
});

router.get('/homepage',(req,res) => {
  res.sendFile(path.join(__dirname, "../../public/components/homepage/home.html"));
});

router.get('/goods',(req,res) => {
  res.sendFile(path.join(__dirname, "../../public/components/Goods/goods.html"));
})
;
router.get('/services',(req,res) => {
  res.sendFile(path.join(__dirname, "../../public/components/services/services.html"));

});

router.get('/guidance',(req,res) => {
  res.sendFile(path.join(__dirname, "../../public/components/Guidance/guidance.html"));
});

  module.exports=router;