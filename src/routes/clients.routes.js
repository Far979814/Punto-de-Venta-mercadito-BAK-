import {Router} from 'express';

import {
    createClients,
    deleteClient,
    getClient,
    getClients,
    updateClient,
} from '../controllers/client.controllers.js'

const router = Router();

router.get('/api/clients', getClients);
router.get('/api/clients/:id',getClient);
router.post('/api/addclient', createClients);
router.put('/api/clients/:id', updateClient);
router.delete('/api/deleteClient/:id', deleteClient);

export default router;