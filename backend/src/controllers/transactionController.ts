import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import * as transactionService from "../services/transactionService";
import * as transactionSchema from "../lib/zod/transactionSchema";
import AppError from "../utils/AppError";
import { CustomRequest, UpdateTransactionDTO } from "../lib/type";

export const createTransaction = asyncHandler(
  async (req: Request, res: Response) => {
    const result = transactionSchema.CreateTransactionSchema.safeParse(
      req.body,
    );
    
    if (!result.success) {
      throw new AppError("Invalid input", 400);
    }

    const transaction = await transactionService.createTransaction(result.data);

    return res.status(201).json({
      success: true,
      data: transaction,
      message: "Transaction created",
    });
  },
);

export const getAllTransactions = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const userId = req.user?.userId;

    if (!userId) {
      throw new AppError("Unauthorized", 401);
    }

    const transactions = await transactionService.getAllTransactions(userId);

    return res.status(200).json({ success: true, data: transactions, message: "Fetch successful"})
  },
);

export const updateTransaction = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const result = transactionSchema.UpdateTransactionSchema.safeParse(
      req.body,
    );
    const userId = req.user?.userId;
    const transactionId = req.params.id as string;

    if(!userId || !transactionId)
      throw new AppError("User ID or Transaction ID is required", 400);

    if (!result.success) {
      throw new AppError("Invalid input", 400);
    }

    const transaction = await transactionService.updateTransaction(
      userId,
      transactionId,
      result.data as UpdateTransactionDTO,
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
    const userId = req.user?.userId;
    const transactionId = req.params.id as string;

    if(!userId || !transactionId)
      throw new AppError("User ID or Transaction ID is required", 400);

    await transactionService.deleteTransaction(userId, transactionId);

    return res
      .status(200)
      .json({ success: true, message: "Deletion successful" });
  },
);
