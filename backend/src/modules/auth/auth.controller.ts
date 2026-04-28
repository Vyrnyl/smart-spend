import type { Request, Response, NextFunction } from "express";
import * as authService from "./auth.service";
import * as authSchema from "./authSchema";
import { asyncHandler } from "../../utils/asyncHandler";
import AppError from "../../utils/AppError";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../../lib/type";

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
      message: "Register successful",
    });
  },
);

export const loginUser = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const result = authSchema.LoginSchema.safeParse(req.body);

    if (!result.success) {
      throw new AppError("Invalid input", 400);
    }

    const { email, password } = result.data;

    const user = await authService.loginUser(email, password);

    const accessToken = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" },
    );

    const refreshToken = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_REFRESH_SECRET as string,
      { expiresIn: "7d" },
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    return res.status(200).json({
      success: true,
      data: user,
      message: "Login successful",
      accessToken,
    });
  },
);