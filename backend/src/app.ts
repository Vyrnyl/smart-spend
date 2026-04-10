import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import { authMiddleware } from './middlewares/authenticate';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('HOMEzass');
});

app.get('/data', authMiddleware, (req: Request, res: Response) => {
    res.json({ data: 'DATA' });
});

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});