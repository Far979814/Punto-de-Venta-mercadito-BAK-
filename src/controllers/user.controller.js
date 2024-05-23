import { userModel } from "../config/models/user.model.js"

export const getUsers = async(req, res) =>{
    try{
        const users = await userModel.findAll();
        res.json(users)
    }catch (error){
        res.status(500).json({
            Error: error.message,
        });
    }
}

export const getUser = async(req, res) =>{
    try {
        const user = await userModel.findByPk( req.params.id);
        user !== null ? res.json(user):res.send(`user with id ${req.params.id} not found`);
    } catch (error) {
        res.send(500).error({message: error.message});
    }
}

export const addUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = new userModel(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        let sqlMessage = 'Unknown error';
        if (error.parent) {
            sqlMessage = error.parent.sqlMessage;
        }
        res.status(500).json({
            Error: 'Error on add User',
            SqlMessage: sqlMessage
        });
    }
};