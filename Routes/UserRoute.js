const express =require('express')
const router = express.Router()
const User = require('../Models/User')
const bcrypt =require('bcrypt')

router.post('/addmember',async (req,res)=>{
if ((!req.body.name)||(!req.body.phn_no)||(!req.body.password)) {
     return  res.status(404).send('Enter all the fields')
}

let user =await User.findOne({name:req.body.name});
if(user) return res.status(400).send('user already registered');
const  reguser = new User({
    name:req.body.name,
    phn_no:req.body.phn_no,
    password:req.body.password
})
await reguser.save();
return res.send(reguser).status(200);

})


router.post('/login',async function (req, res,) {
    const user = await  User.findOne({
          name: req.body.name,
      },)
      if(!user){
          res.status(404).send({success:false,msg:"user not found"})
      }
      else{
      bcrypt.compare(req.body.password, user.password, function (err, isValid) {
          if (isValid) {  
             const token = user.generateAuthToken();
             res.header('x-auth-token',token).send(token);
             
          }
          else{
              return res.status(403).send({ success: false, msg: `Authentication failed, wrong password ` }); 
          }
         }
          )   
  }
  })
  
module.exports =router
