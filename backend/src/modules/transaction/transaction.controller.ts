import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import * as transactionService from "./transaction.service";
import * as transactionSchema from "./transactionSchema";
import AppError from "../../utils/AppError";
import { CustomRequest } from "../../lib/type";

export const createTransaction = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const result = transactionSchema.CreateTransactionSchema.safeParse(
      req.body,
    );
    
    if (!result.success) {
      throw new AppError("Invalid input", 400);
    }

    const userId = req.user!.userId;

    const transaction = await transactionService.createTransaction(userId, result.data);

    return res.status(201).json({
      success: true,
      data: transaction,
      message: "Transaction created",
    });
  },
);

export const getAllTransactions = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const userId = req.user!.userId;

    const transactions = await transactionService.getAllTransactions(userId);

    return res
      .status(200)
      .json({ success: true, data: transactions, message: "Fetch successful" });
  },
);

export const updateTransaction = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const result = transactionSchema.UpdateTransactionSchema.safeParse(
      req.body,
    );
    const userId = req.user!.userId;
    const transactionId = req.params.id as string;

    if (!result.success) {
      throw new AppError("Invalid input", 400);
    }

    const transaction = await transactionService.updateTransaction(
      transactionId,
      userId,
      result.data,
    );

    return res.status(200).json({
      success: true,
      data: transaction,
      message: "Transaction updated",
    });
  },
);

export const deleteTransaction = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const userId = req.user!.userId;
    const transactionId = req.params.id as string;

    await transactionService.deleteTransaction(transactionId, userId);

    return res
      .status(200)
      .json({ success: true, message: "Deletion successful" });
  },
);
