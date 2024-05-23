import {Router} from 'express';

import {logOut, login, profile, register} from '../controllers/auth.controller.js'

import { authRequired } from '../middlewares/validateToken.js';

const router = Router()

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logOut);
router.get('/profile', authRequired, profile);

export default router;