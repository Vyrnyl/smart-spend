import type { Request, Response, NextFunction } from "express";
import * as authService from "../services/authService";

export const registerUser = async (
  req: Request,
  res: Response
) => {
  try {

    const user = await authService.registerUser(req.body);

    return res.status(201).json({ success: true, data: user, message: "User created successfully" })

  } catch (error) {
    if(error instanceof Error)
      return res.status(400).json({ success: false, message: error.message });
    console.log(error);
  }
};
