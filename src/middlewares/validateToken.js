import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authRequired = (req, res, next) =>{

    console.log('authRequired');
    const {token} = req.cookies

    console.log(token);

    if (!token) return res.status(401).json({message: "No token, authorization denied"});

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
        if(err) return res.status(401).json({message: "Invalid Token"});

        req.user = decoded;
        next();
    })

}