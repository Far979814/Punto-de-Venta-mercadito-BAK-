import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js'

import {
    createClients,
    deleteClient,
    getClient,
    getClients,
    updateClient,
} from '../controllers/client.controllers.js'
import { validate } from '../middlewares/validateClient.js';

const router = Router();

router.get('/api/clients',getClients);
router.get('/api/clients/:id',getClient);
router.post('/api/addclient', validate, createClients);
router.put('/api/clients/:id', updateClient);
router.delete('/api/deleteClient/:id', deleteClient);

export default router;