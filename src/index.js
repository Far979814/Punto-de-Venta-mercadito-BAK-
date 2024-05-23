import express from 'express'; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import clientRoutes from './routes/clients.routes.js';
import suppliersRoutes from './routes/suppliers.routes.js';
import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js'
import deparmentRoutes from './routes/departments.routes.js';
import userRoute from './routes/users.routes.js'
import employeesRoutes from './routes/employees.routes.js';
import { dbConnection } from './config/db.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(userRoute);
app.use(clientRoutes);
app.use(suppliersRoutes);
app.use(productsRoutes);
app.use(deparmentRoutes);
app.use('/api',authRoutes);
app.use(employeesRoutes);
// app.use(deparmentRoutes);
dotenv.config();
const PORT = process.env.PORT

dbConnection();

app.listen(`${PORT}`);


console.log(PORT);

console.log(`Server is listening on port ${PORT}`)