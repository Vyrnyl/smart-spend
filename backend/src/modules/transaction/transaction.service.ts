import {
  CreateTransactionDTO,
  UpdateTransactionDTO,
} from "./transaction.types";
import * as transactionRepo from "./transaction.repository";

export const createTransaction = (dto: CreateTransactionDTO) => {
  return transactionRepo.createTransaction({
    ...dto,
    category: { connect: { id: dto.categoryId } },
    user: { connect: { id: dto.userId } },
  });
};

export const getAllTransactions = (userId: string) => {
  return transactionRepo.getAllTransactions(userId);
};

export const updateTransaction = (
  transactionId: string,
  userId: string,
  dto: UpdateTransactionDTO,
) => {
  return transactionRepo.updateTransaction(userId, transactionId, {
    ...(dto.type !== undefined && { type: dto.type }),
    ...(dto.amount !== undefined && { amount: dto.amount }),
    ...(dto.description !== undefined && { description: dto.description }),
    ...(dto.categoryId !== undefined && {
      category: { connect: { id: dto.categoryId } },
    }),
  });
};

export const deleteTransaction = (transactionId: string, userId: string) => {
  return transactionRepo.deleteTransaction(userId, transactionId);
};
