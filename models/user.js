const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30,
    },
    emailId:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
          trim:true,
    },
    password:{
        type:String,
        required:true

    },
});

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;
