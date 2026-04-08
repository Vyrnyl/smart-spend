import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('HOMEzass');
});

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});