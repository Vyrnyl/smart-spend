import * as transactionModel from "../models/transactionModel";

type CreateTransactionDTO = {
  type: "INCOME" | "EXPENSE";
  amount: number;
  description: string;
  categoryId: string;
  userId: string;
};

type UpdateTransactionDTO = {
  type?: "INCOME" | "EXPENSE";
  amount?: number;
  description?: string;
  categoryId?: string;
};

export const createTransaction = async (dto: CreateTransactionDTO) => {
  return await transactionModel.createTransaction({
    type: dto.type,
    amount: dto.amount,
    description: dto.description,
    category: { connect: { id: dto.categoryId } },
    user: { connect: { id: dto.userId } },
  });
};

export const getAllTransactions = async () => {
  return await transactionModel.getAllTransactions();
};

export const updateTransaction = async (
  id: string,
  dto: UpdateTransactionDTO,
) => {
  return await transactionModel.updateTransaction(id, {
    ...(dto.type !== undefined && { type: dto.type }),
  });
};
