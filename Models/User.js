const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const memberschema = new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    phn_no:{
        type:String,
        minlength:5,
        required:true,
    },
    password:{
        type:String,
        minlength:6,
        maxlength:5000,
        required:true,
    },
    isAdmin:{
        type:Boolean},
})
memberschema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                console.log('1')
                return next(err)
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    console.log('2')
                    return next(err)
                }
                user.password = hash;
               
                next()
            })
        })
    }
    else {
        console.log('3')
        return next()
    }
})

memberschema.methods.generateAuthToken = function(){
    const token =jwt.sign({_id:this.id,isAdmin:this.isAdmin},process.env.ACCESS_TOKEN_SECRET);
    return token;
}

const User = new mongoose.model('User',memberschema);

module.exports = User;
