import { Prisma } from "../generated/prisma/client";
import { prisma } from "../lib/prisma";

type CreateTransactionInput = Prisma.TransactionCreateInput;
type UpdateTransactionInput = Prisma.TransactionUpdateInput;

export const createTransaction = async (data: CreateTransactionInput) => {
  return await prisma.transaction.create({
    data,
  });
};

export const getAllTransactions = async () => {
  return await prisma.transaction.findMany();
};

export const updateTransaction = async (id: string, data: UpdateTransactionInput) => {
  return await prisma.transaction.update({
    where: { id },
    data
  });
}