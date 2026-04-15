import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import { authMiddleware } from './middlewares/authenticate';
import { errorHandler } from './middlewares/errorHandler';
import authRoutes from './routes/authRoutes';
import transactionRoutes from './routes/transactionRoutes';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'HOME' });
});

app.use('/auth', authRoutes);

app.use('/transactions', authMiddleware, transactionRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});