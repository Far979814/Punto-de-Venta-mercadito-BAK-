import { clientModel } from '../config/models/client.model.js'

export const getClients = async(req, res) =>{ //Obtener los clientes de la base.
    try{
        const clients = await clientModel.findAll();
        if(!clients) return res.status(401).json({Message: 'Users not found'});
        res.json(clients);
    }catch (error){
        res.status(500).json({
            Error: error.message
        });
    }
}

export const getClient = async(req, res) =>{ //Obtener los clientes de la base.
    try{
        const id = req.params.id;
        const client =  await clientModel.findByPk( id );
        if(!client) return res.status(401).json({Message: `Client with id ${id} not found`});
        res.json({Cliente: client});
    }catch (error){
        res.status(500).json({
            Error: error.message
        });
    }

}

// export const ifExist = async( dni ) =>{
//    const client = await clientModel.findOne({where:{
//         dni: dni
//     }});
//     console.log(client.dataValues);
//     client === null ? false:true
// }

// export const saveClient = async( client ) =>{
//     const clientExist = await clientModel.findOne({where:{
//         dni: client.dni
//     }});
//    if(clientExist !== null) {
//     return console.log('Cliente ya existe');
//    }
//     try {
//         const newClient = new clientModel(client);
//         await newClient.save();
//         console.log('Cliente Guardado exitosamente');
//     } catch (error) {
//         console.log(error.message);
//     }
// }



export const createClients = async( req, res ) => {
    try {
        const client = new clientModel(req.body);
        await client.save();
        res.json({message:'Client Saved successfully',DNI:client.dni});
    } catch (error) {
        let sqlMessage = 'Unknown error';
        if (error.parent) {
            sqlMessage = error.parent.sqlMessage;
        }
        res.status(500).json({
            Error: 'An error ocurred',
            SqlMessage: sqlMessage
        });
    }
}

export const updateClient = async(req, res) => {
    try {
        const { rtn, dni , phone, type_account} = req.body;
        const updateResult = await clientModel.update( {
            rtn: rtn,
            dni: dni,
            phone: phone,
            type_account: type_account
        },
        {
            where: {
                id: req.params.id
            }
        });

        updateResult[0] === 1 ? res.send(`Client with id ${req.params.id} updated.`) : res.send(`Client with id ${req.params.id} not found`);

    } catch (error) {
        let sqlMessage = 'Unknown error';
        if (error.parent) {
            sqlMessage = error.parent.sqlMessage;
        }
        res.status(500).json({
            Error: 'An error ocurred',
            SqlMessage: sqlMessage
        });
    }
}

export const deleteClient = async (req, res) =>{
    try {
        const deleteResult = await clientModel.destroy( {
            where: {
                id: req.params.id
            }
        });
        deleteResult === 1 ? res.send(`Client with id ${req.params.id} deleted.`) : res.send(`Client with id ${req.params.id} not found`);
    } catch (error) {
        let sqlMessage = 'Unknown error';
        if (error.parent) {
            sqlMessage = error.parent.sqlMessage;
        }
        res.status(500).json({
            Error: 'An error ocurred',
            SqlMessage: sqlMessage
        });
    }
}