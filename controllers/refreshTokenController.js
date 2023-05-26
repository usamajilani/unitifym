 const User = require('../model/User'); 
 const jwt = require('jsonwebtoken');
 const path = require('path');

 require('dotenv').config({path :'../../.env'});


 const handleRefreshToken = async (req,res) => {
    
    const cookies = req.cookies;
    if(!cookies ?. jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;
    const foundUser = await User.findOne({refreshToken}).exec();
    if(!foundUser) return res.sendStatus(403) //forbidden

    //Evaluate JWT
   
  jwt.verify(

    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err,decoded) => {
        //not valid token or found user is not equal to decoded username then forbid
        if(err || foundUser.username !== decoded.username) return res.sendStatus(403);
        // if no error , create new accesstoken which contains verified username, access token secret, and set expire time 
        const accessToken = jwt.sign(
            {"username":decoded.username},
            process.env.Access_Token_Secret,
            {expiresIn:"1d"}
        );
        //send access token
        res.json({accessToken})
    }
  )
  
}

 module.exports = { handleRefreshToken }; 