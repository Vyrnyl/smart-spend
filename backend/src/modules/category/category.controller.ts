import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import * as categoryService from "./category.service";
import * as categorySchema from "./category.schema";
import AppError from "../../utils/AppError";
import { CustomRequest } from "../../lib/type";
import { ZodError } from "zod";

export const createCategory = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const result = categorySchema.CreateCategorySchema.safeParse(req.body);

    if (!result.success) throw new AppError("Invalid input", 400);

    const userId = req.user!.userId;
    const category = await categoryService.createCategory(userId, result.data);

    return res
      .status(201)
      .json({ success: true, data: category, message: "Category created" });
  },
);

export const getAllCategory = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const userId = req.user!.userId;

    const categories = await categoryService.getAllCategory(userId);

    return res
      .status(200)
      .json({ success: true, data: categories, message: "Fetch successful" });
  },
);

export const updateCategory = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const result = categorySchema.UpdateCategorySchema.safeParse(req.body);

    if (!result.success) throw new AppError("Invalid input", 400);

    const userId = req.user!.userId;
    const categoryId = req.params.id as string;

    const category = await categoryService.updateCategory(
      categoryId,
      userId,
      result.data,
    );

    return res
      .status(200)
      .json({ success: true, data: category, message: "Category updated" });
  },
);

export const deleteCategory = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const userId = req.user!.userId;
    const categoryId = req.params.id as string;

    await categoryService.deleteCategory(categoryId, userId);

    return res
      .status(200)
      .json({ success: true, message: "Deletion successful" });
  },
);
