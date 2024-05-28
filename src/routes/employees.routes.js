import { Router } from "express";

import { getEmployees, addEmployee } from "../controllers/employee.controller.js";

const router = Router();

router.get('/employees', getEmployees);
router.post('/addEmployee',addEmployee );

export default router;