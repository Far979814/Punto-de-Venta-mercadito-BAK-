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

router.get('/clients',getClients);
router.get('/clients/:id',getClient);
router.post('/addclient', validate, createClients);
router.put('/clients/:id', updateClient);
router.delete('deleteClient/:id', deleteClient);

export default router;