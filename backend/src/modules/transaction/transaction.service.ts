import {
  CreateTransactionDTO,
  UpdateTransactionDTO,
} from "./transaction.types";
import * as transactionRepo from "./transaction.repository";
import * as categoryService from "../category/category.service";
import AppError from "../../utils/AppError";

export const createTransaction = async (
  userId: string,
  dto: CreateTransactionDTO,
) => {
  await categoryService.ensureCategoryOwnership(dto.categoryId, userId);

  return transactionRepo.createTransaction({
    type: dto.type,
    amount: dto.amount,
    description: dto.description,
    category: { connect: { id: dto.categoryId } },
    user: { connect: { id: userId } },
  });
};

export const getAllTransactions = (userId: string) => {
  return transactionRepo.getAllTransactions(userId);
};

export const updateTransaction = async (
  transactionId: string,
  userId: string,
  dto: UpdateTransactionDTO,
) => {
  const transaction = await transactionRepo.getTransactionById(
    transactionId,
    userId,
  );
  if (!transaction) throw new AppError("Transaction not found", 404);

  return transactionRepo.updateTransaction(transactionId, {
    ...(dto.type !== undefined && { type: dto.type }),
    ...(dto.amount !== undefined && { amount: dto.amount }),
    ...(dto.description !== undefined && { description: dto.description }),
    ...(dto.categoryId !== undefined && {
      category: { connect: { id: dto.categoryId } },
    }),
  });
};

export const deleteTransaction = async (
  transactionId: string,
  userId: string,
) => {
  const transaction = await transactionRepo.getTransactionById(
    transactionId,
    userId,
  );
  if (!transaction) throw new AppError("Category not found", 404);

  return transactionRepo.deleteTransaction(transactionId);
};
