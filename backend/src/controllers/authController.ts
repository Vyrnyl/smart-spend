import type { Request, Response, NextFunction } from "express";
import * as authService from "../services/authService";
import * as authSchema from "../lib/zod/authSchema";
import AppError from "../utils/AppError";
import { asyncHandler } from "../utils/asyncHandler";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const result = authSchema.RegisterSchema.safeParse(req.body);
    
    if (!result.success) {
      throw new AppError("Invalid input", 400);
    }

    const { confirmPassword, ...resultData } = result.data;
    const user = await authService.registerUser(resultData);

    return res.status(201).json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  },
);

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const result = authSchema.LoginSchema.safeParse(req.body);

  if (!result.success) {
    throw new AppError("Invalid input", 400);
  }

  const { email, password } = result.data;

  const user = await authService.loginUser(email, password);

  return res
    .status(200)
    .json({ success: true, data: user, message: "Login successfully" });
});
