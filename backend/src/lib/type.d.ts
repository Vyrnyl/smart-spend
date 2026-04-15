//Custom Request
import type { Request } from "express";
import type { JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  userId: string;
  email: string;
}

export interface CustomRequest extends Request {
  user?: CustomJwtPayload;
}


//User
export interface User {
  name: string;
  email: string;
  password: string;
} 

//Transaction
export interface CreateTransactionDTO {
  type: "INCOME" | "EXPENSE";
  amount: number;
  description: string;
  categoryId: string;
  userId: string;
};

export interface UpdateTransactionDTO {
  type?: "INCOME" | "EXPENSE";
  amount?: number;
  description?: string;
  categoryId?: string;
};