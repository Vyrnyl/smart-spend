import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import AppError from "../../utils/AppError";

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

export const updateTransaction = async (
  transactionId: string,
  userId: string,
  data: UpdateTransactionInput,
) => {
  const transaction = await prisma.transaction.findFirst({
    where: { id: transactionId, userId },
  });

  if (!transaction) throw new AppError("Transaction not found", 404);

  return prisma.transaction.update({
    where: { id: transactionId, userId },
    data,
  });
};

export const deleteTransaction = async (transactionId: string, userId: string) => {
  const transaction = await prisma.transaction.findFirst({
    where: { id: transactionId, userId },
  });

  if (!transaction) throw new AppError("Transaction not found", 404);
  return prisma.transaction.delete({ where: { id: transactionId } });
};
