import { userModel } from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import { AccessToken } from '../lib/jwt.js';

export const register = async(req, res) =>{
    const {email, username, password} = req.body
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
         email, username, password: hashPassword
        });

        await newUser.save()

         const token = await AccessToken({id: newUser.id, 
                       username: newUser.username,
        });

    res.cookie('token', token)
    res.json({
        message: "User created successfully"
    })

    } catch (error) { 
        res.status(500).json({
            Error: error.message
        });
    }
}
export const login = async(req, res) =>{
    const { password, email } = req.body


    try {
        console.log(email, password);
        const userFound = await userModel.findOne({ where:{email: email} });

        if(!userFound) return res.status(400).json({message:"User not found"});

        const isMatch = await bcrypt.compare(password, userFound.password);
        console.log(userFound.password);
        console.log(isMatch);

        if(!isMatch) return res.status(400).json({message:"Invalid Credentials"});
        
         const token = await AccessToken({id: userFound.id, 
                       username: userFound.username,
        });

    
    res.cookie('token', token)
    res.json({
        message: "Welcome!",
        user: userFound
    })
    } catch (error) { 
        res.status(500).json({
            Error: error.message
        });
    }
}

export const logOut = (req, res) =>{
    res.cookie('token', "",{
        expires: new Date(0)
    })

    return res.sendStatus(200);
}

export const profile =  async( req, res ) =>{
    const userFound = await userModel.findOne({where: {id: req.user.id}})

    if(!userFound) return res.status(400).json({message: "User not found"});

   return res.json({
    id: userFound.id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
   })
}