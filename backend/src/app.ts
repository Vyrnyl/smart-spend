import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import { authMiddleware } from './middlewares/authenticate';
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('HOMEzass');
});

app.use('/auth', authRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});