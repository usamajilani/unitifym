const User = require('../model/User');

//use=> safely stores password in database
 const bcrypt = require('bcrypt')

 const handleNewUser = async (req,res) =>{
    const {user,pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({'message' : 'Username and password are required' });
//Check for duplicate usernames in DB
    const duplicate = await User.findOne({username: user}).exec();
    if (duplicate) return res.sendStatus(409);  //conflict
    try {
        //encrypt password
        const hashedPwd = await bcrypt.hash(pwd,10)

        //Create and store new User
        const result = await  User.create({ 
                "username" : user, 
                "password" : hashedPwd 
            });
            console.log(result)    
            res.status(201).json({'success' : `New user ${user} created! `})
        } 
    catch (err) {
    res.status(500).json({'message' : err.message})
    }
}

module.exports = { handleNewUser };
