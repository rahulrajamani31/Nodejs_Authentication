const mongoose = require('mongoose')

const connectDB  = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://club_user:rmsr%4012345@cluster0.m3wnw.mongodb.net/farmbook?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
    
}
 
module.exports=connectDB;
