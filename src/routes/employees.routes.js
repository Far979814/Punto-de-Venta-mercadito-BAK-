import { Router } from "express";

import { getEmployees, addEmployee } from "../controllers/employee.controller.js";

const router = Router();

router.get('/api/employees', getEmployees);
router.post('/api/addEmployee',addEmployee );

export default router;