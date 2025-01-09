const User=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


module.exports.signup=async (req,res) => {

    const {name,password,emailId}=req.body;
    try{

  const hashPassword=await bcrypt.hash(password,10);
 
 
 const user=new User({name,password:hashPassword,emailId});
 
 await user.save();
 
 res.status(200).json({result:"User Added successfully!"})
 
    }
    catch(e){
 res.status(400).json({result:e.message});
    }
 

}

module.exports.login=async(req,res)=>{

    const {emailId,password}=req.body;
    console.log(req.body);

    try{
const user=await User.findOne({emailId});
if(user)
{
const isValid=await bcrypt.compare(password,user.password);

    if(isValid)
    {
        res.status(200).json({message: "Login successful", token: generateToken(user.id) });
    }
    else
    {
        res.status(401).json({ message: "Password is Wrong"});
    }

}
else{
    res.status(404).json({ message: "User Not Found"});

}

    }
    catch(e)
    {
        
    res.status(409).json({error: e.message});
     
    }
    
}

function generateToken(id){
    const key = "sahil";

    return jwt.sign({ userId: id }, key);
}