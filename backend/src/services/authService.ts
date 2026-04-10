import * as userModel from "../models/userModel";
import bcrypt from "bcrypt";
import { User } from "../lib/type";

export const registerUser = async (data: User) => {
  const isEmailExist = await userModel.getUserByEmail(data.email);

  if (isEmailExist) {
    throw new Error("Email already exist");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  
  const newUser = await userModel.createUser({
    ...data,
    password: hashedPassword,
  });

  const { password, ...user } = newUser;

  return user;
};
