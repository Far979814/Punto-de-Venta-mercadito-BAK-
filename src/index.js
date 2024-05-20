import express from 'express'; 
import dotenv from 'dotenv';
import dbRoutes from './routes/dbTest.routes.js'
import clientRoutes from './routes/clients.routes.js';

const app = express();

app.use(express.json());
app.use(dbRoutes);
app.use(clientRoutes);
dotenv.config();
const PORT = process.env.PORT

app.listen(`${PORT}`);


console.log(PORT);

console.log(`Server is listening on port ${PORT}`)