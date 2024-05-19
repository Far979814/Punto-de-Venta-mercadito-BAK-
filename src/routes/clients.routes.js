import {Router} from 'express';

import {
    getClients,
} from '../controllers/client.controllers.js'

const router = Router();

router.get('/api/clients', getClients);

export default router;