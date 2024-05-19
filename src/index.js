import express from 'express'; 

const app = express();

app.use(express.json());
const port = "xxxx";

app.listen(`${port}`);

console.log(`Server is listening on port ${xxxx}`)