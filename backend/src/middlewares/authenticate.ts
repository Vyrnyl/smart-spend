import dotenv from 'dotenv';
import type { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from "jsonwebtoken";

dotenv.config();

interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

export const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if(!authHeader || !authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized"})
  }
  
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token as string, process.env.AUTH_SECRET as string);

    req.user = decoded;
    next();
  } catch(error) {
    res.status(403).json({ message: "Forbidden " });
  }
}