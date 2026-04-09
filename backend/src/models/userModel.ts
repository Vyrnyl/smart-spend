import { prisma } from "../lib/prisma";
import { User } from "../lib/type";

export const createUser = async (data: User) => {
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
