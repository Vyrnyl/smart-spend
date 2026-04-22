import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

type CreateTransactionInput = Prisma.TransactionCreateInput;
type UpdateTransactionInput = Prisma.TransactionUpdateInput;

export const createTransaction = (data: CreateTransactionInput) => {
  return prisma.transaction.create({
    data,
  });
};

export const getAllTransactions = (userId: string) => {
  return prisma.transaction.findMany({ where: { userId } });
};

export const getTransactionById = (transactionId: string, userId: string) => {
  return prisma.transaction.findFirst({ where: { id: transactionId, userId } });
};

export const updateTransaction = (
  transactionId: string,
  data: UpdateTransactionInput,
) => {
  return prisma.transaction.update({
    where: { id: transactionId },
    data,
  });
};

export const deleteTransaction = (
  transactionId: string
) => {
  return prisma.transaction.delete({ where: { id: transactionId } });
};
