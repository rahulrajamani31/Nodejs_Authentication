const jwt = require('jsonwebtoken');

require('dotenv').config()

module.exports= function (req,res,next){
    const token =req.header('x-auth-token');
    if(!token) return res.status(401).send('Access senied no token found');

    try{
        const decoded =jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    }
    catch(ex){
        res.status(400).send('invalid token');
    }
}
