import * as userModel from "../models/userModel";
import bcrypt from "bcrypt";
import { User } from "../lib/type";
import AppError from "../utils/AppError";

export const registerUser = async (data: User) => {
  const isEmailExist = await userModel.getUserByEmail(data.email);

  if (isEmailExist) {
    throw new AppError("Email already exist", 401);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = await userModel.createUser({
    ...data,
    password: hashedPassword,
  });

  const { password, ...user } = newUser;

  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await userModel.getUserByEmail(email);

  const DUMMY_HASH =
    "$2b$10$CwTycUXWue0Thq9StjUM0uJ8kG6Z5qX6Ch12HlbDTXhMHDLecxB2a";
  const passwordToCompare = user?.password || DUMMY_HASH;
  const isMatch = await bcrypt.compare(password, passwordToCompare);

  if (!user || !isMatch) {
    throw new AppError("Invalid email or password", 401);
  }
  
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};
