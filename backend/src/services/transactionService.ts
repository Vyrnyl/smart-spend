import { CreateTransactionDTO, UpdateTransactionDTO } from "../lib/type";
import * as transactionModel from "../models/transactionModel";

export const createTransaction = (dto: CreateTransactionDTO) => {
  return transactionModel.createTransaction({
    type: dto.type,
    amount: dto.amount,
    description: dto.description,
    category: { connect: { id: dto.categoryId } },
    user: { connect: { id: dto.userId } },
  });
};

export const getAllTransactions = (userId: string) => {
  return transactionModel.getAllTransactions(userId);
};

export const updateTransaction = (
  userId: string,
  transactionId: string,
  dto: UpdateTransactionDTO,
) => {
  return transactionModel.updateTransaction(userId, transactionId, {
    ...(dto.type !== undefined && { type: dto.type }),
    ...(dto.amount !== undefined && { amount: dto.amount }),
    ...(dto.description !== undefined && { description: dto.description }),
    ...(dto.categoryId !== undefined && { category: { connect: { id: dto.categoryId} } }),
  });
};

export const deleteTransaction = (userId: string, transactionId: string) => {
  return transactionModel.deleteTransaction(userId, transactionId);
}
