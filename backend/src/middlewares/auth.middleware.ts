import type { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { CustomJwtPayload, CustomRequest } from "../lib/type";

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
    ) as CustomJwtPayload;
    
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token " });
  }
};
