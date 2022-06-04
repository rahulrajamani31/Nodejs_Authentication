const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

 

const uploads = new mongoose.Schema(
  { 
    _id:ObjectId,
    grp:[{
      
        img: {
            type: String,
            default: "",
          },
          title:String,
          cropname:String,
          tags:String,
          location:String,
          brief:String,
          date:String,
          time:String
        }],
    
 
}
);

module.exports =  mongoose.model("uploads", uploads);