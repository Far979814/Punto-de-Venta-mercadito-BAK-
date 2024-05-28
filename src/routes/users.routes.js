import { Router}  from 'express';

import {
getUsers,
getUser,
addUser,
} from '../controllers/user.controller.js'

const router = Router();

router.get('/users', getUsers);
router.get('/user/:id',getUser);
router.post('/addUser',addUser);

export default router;