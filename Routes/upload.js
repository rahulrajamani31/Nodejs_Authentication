const express = require("express");
const router = express.Router();
const upload = require("../Models/upload");
const multer = require("multer");
const auth = require('./auth');
const User = require('../Models/User')
var date_ob = new Date();
var day = ("0" + date_ob.getDate()).slice(-2).toString();
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2).toString();
var year = date_ob.getFullYear().toString();
var hours = date_ob.getHours().toString();
var minutes = date_ob.getMinutes().toString();
var seconds = date_ob.getSeconds().toString();
var datenows = day+"-"+month+"-"+year;
var times = hours+":"+minutes;



router.post('/adddoubt',auth ,async (req,res)=>{
    let user = await upload.findOne({_id:req.user._id});
    if(!user) {
    const  uploaddata = await new upload({
       _id:req.user._id,
       grp: {
               
                 img:req.body.img,
                 title:req.body.title,
                 cropname:req.body.cropname,
                 tags:req.body.tags,
                 location:req.body.location,
                 brief:req.body.brief,
                 date:datenows,
                 time:times
               }
            
    })
    await uploaddata.save();
    return res.send(uploaddata).status(200);
   
}
else{
   const  data = await upload.findByIdAndUpdate(req.user._id,{
      $push : {
      grp: {
                img:req.body.img,
                title:req.body.title,
                cropname:req.body.cropname,
                tags:req.body.tags,
                location:req.body.location,
                brief:req.body.brief,
                date:datenows,
                time:times
              }
           }
   })
   return res.send(data).status(200);
  
  
}

    })
    
 
  module.exports  = router;