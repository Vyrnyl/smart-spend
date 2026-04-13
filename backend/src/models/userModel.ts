import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma/client";

type CreateUserInput = Prisma.UserCreateInput;
export const createUser = async (data: CreateUserInput) => {
  return prisma.user.create({
    data,
  });
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
