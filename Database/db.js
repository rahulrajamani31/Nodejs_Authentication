const mongoose = require('mongoose')

const connectDB  = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/Farm_book?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {
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

//mongodb+srv://club_user:rmsr%4012345@cluster0.m3wnw.mongodb.net/farmbook?retryWrites=true&w=majority
//"mongodb://localhost:27017/Farm_book?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"