const User = require('../model/User'); 
 
 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');
 const path = require('path');

 require('dotenv').config({path :'../../.env'});


 const handleLogin = async (req,res) => {
    //Getting username and password for authorization
    const {user,pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({'message' : 'Username and password are required' });
    const foundUser = await User.findOne({username: user}).exec();
    if(!foundUser) return res.sendStatus(401) //unauthorized

    //Evaluate Password
    const match = await bcrypt.compare(pwd,foundUser.password)
    if(match){
        //create JWT
        const accessToken = jwt.sign(
            {"username" : foundUser.username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '1d'}
        );
        const refreshToken = jwt.sign(
            {"username" : foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        //Saving refreshToken with current token
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);

       //needs to store refreshToken => use Cookie with http only...not available to javaScript 
       res.cookie('jwt',refreshToken,{httpOnly: true, sameSite: 'None' ,secure : true, maxAge: 24 * 60 * 60 * 1000})
        res.json({accessToken })
    }else{
        res.sendStatus(401); //unauthorized
    }
 }
 module.exports = { handleLogin };