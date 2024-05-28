import { Router } from 'express';

import {
    addDepartment,
    getDepartments,
} from '../controllers/department.controller.js'

const router = Router();

router.get('/departments', getDepartments);
router.post('/newdepartment', addDepartment);

export default router;