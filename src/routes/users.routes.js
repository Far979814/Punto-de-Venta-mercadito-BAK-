import { Router}  from 'express';

import {
getUsers,
getUser,
addUser,
} from '../controllers/user.controller.js'

const router = Router();

router.get('/api/users', getUsers);
router.get('/api/user/:id',getUser);
router.post('/api/addUser',addUser);

export default router;