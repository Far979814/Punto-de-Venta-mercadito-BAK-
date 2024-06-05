import { Router } from "express";

import { getEmployees, addEmployee } from "../controllers/employee.controller.js";
import { validate } from "../middlewares/validateEmployee.js";

const router = Router();

router.get('/employees', getEmployees);
router.post('/addEmployee', validate, addEmployee);

export default router;