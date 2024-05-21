

export const getClients = async(req, res) =>{ //Obtener los clientes de la base.
    res.send('GetClients')
}

export const getClient = async(req, res) =>{ //Obtener los clientes de la base.
    res.send('GetCLIENT')

}

export const createClients = async(req, res) => {
    res.send('CREATE CLIENT')
}

export const updateClient = async(req, res) => {
    res.send('Update Client')
}

export const deleteClient = async (req, res) =>{
    res.send('Delete Client')
   
}